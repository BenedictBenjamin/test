import { useState } from "react";
import ZooLandMark from "../components/ZooLandMark";
import EnteredPrice from "../components/EnteredPrice";

const MeTest = () => {
  // 2. 문제 코드
  const [numberAction, setNumberAction] = useState("");
  // useState 빈문자를 초기 값으로 잡아 주었습니다  numberAction 안에 정수 값을 setNumberAction 업데이트 하게 만들어 주었습니다.

  const handleAction = event => {
    // 입력된 값에서 숫자만 추출하여 state 업데이트
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    setNumberAction(newValue);
  };

  //parseInt 문자를 정수 반환 하여  handleAction 안들어있는 값에 (,) 처리를 하였습니다.
  const formattedNumberAction = numberAction
    ? parseInt(numberAction).toLocaleString("ko-KR")
    : "";

  return (
    <div>
      <div>
        <ZooLandMark />
      </div>
      <br />
      <h2>
        문제 2.
        <p>검색어에 1000단위가 마다 (,) 처리하였습니다 .</p>
      </h2>
      <label>가격</label>
      <input
        type="text"
        value={numberAction}
        onChange={handleAction}
        placeholder="숫자를 입력해주세요"
      />

      <p>
        입력된 가격:
        <span style={{ color: "rgb(255 186 243)" }}>
          {formattedNumberAction}
        </span>
      </p>

      <br />
      <EnteredPrice />
      <br />
    </div>
  );
};

export default MeTest;
