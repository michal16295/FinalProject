import React, { Fragment, useState, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sketch from "react-p5";
import * as ml5 from "ml5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TrainedData extends Component {
  video;
  poseNet;
  pose;
  skeleton;

  brain;
  poseLabel = "Y";

  state = "waiting";
  targetLabel;

  setup = async (p5, canvasParentRef) => {
    console.log("in setup");
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

    const modelInfo = {
      model:
        "model/model.json",
      metadata:
        "model/model_meta.json",
      weights:
        "model/model.weights.bin",
    };
    console.log(modelInfo);
    console.log(this.brain.load(modelInfo, this.brainLoaded));
    await this.brain.load(modelInfo).then(this.brainLoaded);
  };
  brainLoaded = () => {
    console.log("in brain loaded");
    this.classifyPose();
  };
  classifyPose = async () => {
    console.log("in classifyPose");
    if (this.pose) {
      let inputs = [];
      for (let i = 0; i < this.pose.keypoints.length; i++) {
        let x = this.pose.keypoints[i].position.x;
        let y = this.pose.keypoints[i].position.y;
        inputs.push(x);
        inputs.push(y);
      }
      console.log(inputs);
      console.log(this.brain.classify(inputs, this.gotResult));
      await this.brain
        .classify(inputs, (err, results) => {
          return results;
        })
        .then((results) => {
          console.log(results);
        });
    } else {
      setTimeout(this.classifyPose, 100);
    }
  };
  gotResult = (error, results) => {
    console.log("in gotResult");
    console.log(results);
    if (results[0].confidence > 0.7) {
      this.poseLabel = results[0].label.toUpperCase();
    }
    console.log(results[0].confidence);
    this.classifyPose();
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
        if (this.poseLabel === "Y") p5.stroke(0, 255, 0);
        else p5.stroke(255, 0, 0);
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
        <Sketch setup={this.setup} draw={this.draw} />
        <ToastContainer />
      </section>
    );
  }
}
TrainedData.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(TrainedData);
