/**
 * Sticky Component Demo for uxcore
 * @author taoqili
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Sticky from '../src';
import '../style';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      state: true
    };
    // setTimeout(() => {
    //   this.setState({
    //     state: false
    //   })
    // }, 3000)
  }

  render() {
    return (
      <div>
        <div>这里是其它内容</div>
        <div style={{height: '500'}}>这里是其它内容</div>
        <div>这里是其它内容</div>
        <div>这里是其它内容</div>
        <div>这里是其它内容</div>
        <div>这里是其它内容</div>
        <div style={{
          width: 1000,
          height: 500,
          overflow: 'scroll',
          background: 'red',
          margin: '0 auto'
        }}>
          <div>这里是其它内容</div>

          <Sticky offsetTop={0} offsetBottom={0} onChange={(isSticky) => {console.log(isSticky)}}>
            <div style={{ background: 'lightblue', color: 'blue' }}>
              这里是固顶内容
              lskadj十来块都放假了卡机多放辣椒拉屎的
              <br/>
              { this.state.state ? <p>撒地方卢卡斯剪短发了</p> : null }
            </div>
          </Sticky>
          <div style={{height: '1000px'}}>
sadf
          </div>
        </div>
        <div style={{ height: '2000px' }}>
          <p>这里是其它内容1</p>
          <p>这里是其它内容2</p>
          <p>这里是其它内容3</p>
          <p>这里是其它内容4</p>
        </div>
        <div>这里是其它内容</div>
      </div>
    );
  }
}

export default Demo;
