import React, { Component } from "react";

import { Form, Button, Select } from "antd";
import { connect } from "react-redux";
import { getInfo4 } from "../redux/reducer";
import { StepForwardOutlined, CarFilled , DashboardFilled, RedoOutlined} from "@ant-design/icons";

class TypeOfRepair extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
    this.addInfo();
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  addInfo = () => {
    const { repairChoice } = this.state;
    this.props.getInfo4([repairChoice]);
    this.props.history.push(`/Maintenance`);
  };
  handleChange = (value) => {
    this.setState({ repairChoice: value });
  };
  constructor(props) {
    super(props);
    this.state = {
      repairChoice: null,
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 },
      },
    };
  }

  render() {
    console.log(this.state.repairChoice);
    const { Option } = Select;
    return (
      <div className="main">
        <header>
          <h1>Automotive Receipts</h1>
        </header>
        
          <div>

        <Form
         className="form-container"
          {...this.state.layout}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <div className="form-item">
          <CarFilled style={{ fontSize: "50px", color: "#A02140" }} />
          <label>Repair Type:</label>
          <Form.Item
            name="Repair Type"
            className="choice2"
            rules={[
              {
                required: true,
              },
            ]}
            >
            <Select 
            placeholder="Choose Repair Type"
            onChange={this.handleChange}>
            placeholder="Choose Repair Type"
              <Option value="Mechanical">Mechanical</Option>
              <Option value="Cosmetic">Cosmetic</Option>
            </Select>
          </Form.Item>
          </div>
          <div className="form-item3">
              <Form.Item>
                <Button
                  size={"large"}
                  className="button-next"
                  type="primary"
                  onClick={() => this.props.history.push(`/`)}
                  icon={<RedoOutlined 
                    
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  }
                >
                  Restart
                </Button>
                </Form.Item>
                </div>
                <div className="form-item3">

                <Form.Item>
                <Button
                  size={"large"}
                  icon={
                    <StepForwardOutlined
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  }
                  className="button-next"
                  type="primary"
                  htmlType="submit"
                >
                  Next
                </Button>

                </Form.Item>
                </div>
        </Form>
          </div>
      </div>
    );
  }
}

export default connect(null, { getInfo4 })(TypeOfRepair);
