import React, { Component } from 'react';
import { CustomComponent2 } from 'components';
import classNames from 'classnames/bind';
import styles from './common.css';

const cx = classNames.bind(styles);

class Example2 extends Component {
  render(){
    return(
      <React.Fragment>
      <div className={cx("Example-wrapper")}>

        <div className={cx("Example-header")}>
          <h2>React Component State에 기초한 자바스크립트 스타일 애니메이션</h2>
          <h4>
            <p>장점: CSS에 의존하지 않는다</p>
            <p>단점: 크로스 플랫폼을 지원하지 않는 점입니다(리액트 네이티브 포함). 역시나 CSS와 DOM에 의존하기 때문에 복잡한 효과는 컨트롤하기 어렵습니다</p>
          </h4>
        </div>

        <CustomComponent2/>

        <ol className={cx("Example-text")}>
          <li> initial state의 disabled를 true로 세팅 </li>
          <li> onChange method는 input에 붙여질 예정인데 이것은 타이핑된 글자수를 체크하는 기능입니다. 4글자가 넘으면 활성 상태가 되고, 미만일 경우에는 비활성 상태가 됩니다. </li>
          <li> button element의 style property는 애니메이션 클래스 buttonEnabled를 더할지 말지를 this.state.disabled의 value에 따라 결정합니다. </li>
        </ol>

      </div>
    </React.Fragment>
    );
  }
}

export default Example2;
