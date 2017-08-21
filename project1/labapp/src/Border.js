import React, { Component } from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}


function WelcomeDialog() {
  return (
    <Dialog
			title="Welcome"
			message="Thank you for visiting our spacecraft!" />
  );
}

function SignInDialog(props) {
  return (
    <Dialog
			title={"Welcome Back " + props.name}
			message="Glad to have you back." />
  );
}

export  { SignInDialog, WelcomeDialog };
