import React, { Component } from 'react';
import { CustomComponent } from 'components';
import classNames from 'classnames/bind';
import styles from './common.css';

const cx = classNames.bind(styles);

class Example1 extends Component {
  render(){
    return(
      <React.Fragment>
        <div className={cx("Example-wrapper")}>
          <div className={cx("Example-header")}>
            <h2>
              React Component State에 기초한 CSS Animation
              애니메이션을 조정하는 가장 기본적인 방법은 CSS 클래스 프로버티
              더하거나 지우는 방식입니다. 이미 CSS를 사용하고 있다면 가장 손쉬운 접근 방법입니다.
            </h2>
          </div>

          <CustomComponent/>

          <ol className={cx("Example-text")}>
            <li> focused 됐을 때 상태를 변화시킬 수 있도록 focus 함수를 넣어주고 </li>
            <li> 원래는 componentDidMount에서 ref를 통해 input에 직접 접근하여 listener를 추가하는 방식이었으나
                그렇게 하지 않고 input 태크에 내장되어 있는 리스너를 사용했습니다. </li>
            <li> focus method는 상태 기반의 토클 형태 함수입니다. </li>
            <li> 토글을 이용하여 input tag의 className을 변화시켜 애니메이션을 일으킵니다.</li>
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default Example1;
