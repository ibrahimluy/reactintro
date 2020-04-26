import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email"></Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password"></Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description"></Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city"></Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Kırıkkale</option>
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>Adana</option>
              <option>Van</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Button type="submit">Save</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
