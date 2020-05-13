import React, { Fragment, useState, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sketch from "react-p5";
import * as ml5 from "ml5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CollectData extends Component {
  video;
  poseNet;
  pose;
  skeleton;

  brain;
  poseLabel = "";

  state = "waiting";
  targetLabel;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(640, 480).parent(canvasParentRef);
    this.video = p5.createCapture(p5.VIDEO);
    this.video.hide();
    this.poseNet = ml5.poseNet(this.video, this.modelLoaded);
    this.poseNet.on("pose", this.getPoses);
    let options = {
      inputs: 12,
      outputs: 2,
      task: "classification",
      debug: true,
    };
    this.brain = ml5.neuralNetwork(options);
  };
  draw = (p5) => {
    p5.push();
    p5.translate(640, 0);
    p5.scale(-1, 1);
    p5.image(this.video, 0, 0, 640, 480);
    if (this.pose) {
      for (let i = 0; i < this.skeleton.length; i++) {
        let a = this.skeleton[i][0];
        let b = this.skeleton[i][1];

        p5.strokeWeight(2);
        p5.stroke(0, 255, 0);
        p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
      }
      for (let i = 5; i <= 10; i++) {
        let x = this.pose.keypoints[i].position.x;
        let y = this.pose.keypoints[i].position.y;
        p5.fill(0, 255, 0);
        p5.stroke(0, 255, 0);
        p5.ellipse(x, y, 16, 16);
      }
    }
  };
  keyPressed = async (p5) => {
    try {
      if (p5.key == "s") {
        this.brain.saveData();
      } else {
        this.targetLabel = p5.key;
        toast(this.targetLabel, { autoClose: 3000 });

        await this.delay(3000);
        toast.error("collecting", { autoClose: 10000 });
        this.state = "collecting";

        await this.delay(10000);
        toast.error("not collecting");
        this.state = "waiting";
      }
    } catch (err) {
      console.log(err);
    }
  };

  delay = (time) => {
    return new Promise((resolve, reject) => {
      if (isNaN(time)) {
        reject(new Error("delay requires a valid number."));
      } else {
        setTimeout(resolve, time);
      }
    });
  };
  modelLoaded = () => {
    console.log("poseNet ready");
  };
  getPoses = (poses) => {
    if (poses.length > 0) {
      this.pose = poses[0].pose;
      this.skeleton = poses[0].skeleton;
      if (this.state == "collecting") {
        let inputs = [];
        for (let i = 0; i < this.pose.keypoints.length; i++) {
          let x = this.pose.keypoints[i].position.x;
          let y = this.pose.keypoints[i].position.y;
          inputs.push(x);
          inputs.push(y);
        }
        let target = [this.targetLabel];
        this.brain.addData(inputs, target);
      }
    }
  };

  render() {
    return (
      <section className="container">
        <Sketch
          setup={this.setup}
          draw={this.draw}
          keyPressed={this.keyPressed}
        />
        <ToastContainer />
      </section>
    );
  }
}
CollectData.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(CollectData);
