import React, { Component } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber } from "antd";
import { connect } from "react-redux";
import { getInfo3Pr, getInfo3Pu, getInfo3Mo } from "../../redux/reducer";
import { StepForwardOutlined, UserAddOutlined ,DollarCircleFilled, RedoOutlined , FormOutlined} from "@ant-design/icons";

class Maintenance extends Component {
  // sets state from Other selections input
  handlePriceInput = (value) => {
    console.log(value);
    this.setState({ value });
  };
  handlePurchaserInput = (e) => {
    this.setState({ purchaser: e.target.value });
  };
  handleMemoInput = (e) => {
    this.setState({ memo: e.target.value });
  };

  //check for validation on required field the sends info to redux
  onFinish = (values) => {
    console.log("Success:", values);

    this.addInfo();
    this.props.history.push(`/Submit`);
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //pulls info from state and sends it to redux
  addInfo = () => {
    const { value, purchaser, memo } = this.state;

    this.props.getInfo3Pr([value]);
    this.props.getInfo3Pu([purchaser]);
    this.props.getInfo3Mo([memo]);
  };
  // sendInfo=()=>{
  //   axios.post('/api/add', {values:this.state.dataOutput} )

  // .then((res)=>{
  //   console.log()

  // })
  // .catch(err=>console.log(err))
  // }
  constructor(props) {
    // const {infoPageOne,infoPageTwo,infoPageThree,infoPageFour} = props.reducer
    super(props);
    this.state = {
      value: "",
      purchaser: [],
      memo: [],
      //  dataOutput:[infoPageOne[0],infoPageOne[1],infoPageOne[2],infoPageOne[3],infoPageTwo[0],infoPageTwo[1],infoPageFour[0],infoPageThree[0],infoPageThree[1],infoPageThree[2]],

      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 },
      },
    };
  }

  render() {
    return (
      <div className="main">
        <header>
          <h1>Maintenance</h1>
        </header>
        <div>
          <Form
          className="form-container"
            {...this.state.layout}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
             <div className="form-item">
             <DollarCircleFilled style={{ fontSize: "45px", color: "#A02140" }} />
             
             <label>Price:</label>
            <Form.Item
              name="Price"
           className="choice2"
              rules={[
                {
                  required: true,
                  message: `'Price' is required Must be a Number`,
                },
              ]}
            >
              <InputNumber
                initialValue={0}
                size={"large"}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={this.handlePriceInput}
              />
            </Form.Item>
             </div>
             <div className="form-item">
             <UserAddOutlined style={{ fontSize: "50px", color: "#A02140" }} />
             
             <label>Purchaser:</label>
            <Form.Item
              name="Purchaser"
              className='choice2'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Your answer"
                type="text"
                onChange={this.handlePurchaserInput}
              />
            </Form.Item>
             </div>
             <div className="form-item">
             <FormOutlined style={{ fontSize: "50px", color: "#A02140" }} />
             
             <label>Memo:</label>
            <Form.Item
              name="Memo"
              className='choice3'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                onChange={this.handleMemoInput}
                placeholder="Your answer"
              />
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
                  className="button-next2"
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
const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { getInfo3Pr, getInfo3Pu, getInfo3Mo })(
  Maintenance
);
