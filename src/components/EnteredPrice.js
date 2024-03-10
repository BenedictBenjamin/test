import React, { useState } from "react";

const EnteredPrice = () => {
  // 2.1 문제 해결 코드
  const [number, setNumber] = useState("");

  const handleChange = event => {
    // 입력된 값에서 숫자만 추출하여 state 업데이트
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    setNumber(newValue);
  };

  const formattedNumber = number
    ? parseInt(number).toLocaleString("ko-KR")
    : ""; // 값이 없을 때는 빈 문자열 반환

  return (
    <div>
      <h2>
        문제 2.1
        <p> input 안에 직접 1000단위가 마다 (,) 처리하였습니다 .</p>
      </h2>
      <label>가격</label>
      <input
        type="text"
        value={formattedNumber} // 포맷된 숫자를 입력 값으로 사용
        onChange={handleChange} // 입력 값이 변경될 때마다 handleChange 함수 호출
        placeholder="숫자를 입력해주세요"
      />
    </div>
  );
};

export default EnteredPrice;
