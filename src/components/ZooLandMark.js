/* eslint-disable no-undef */
import React, { useState } from "react";
import imageSrc from "../images/Zoos.svg";

const ZooList = [
  { name: "사자", address: "제3아프리카관" },
  { name: "치타", address: "제3아프리카관" },
  { name: "호랑이", address: "제3아프리카관" },
  { name: "단봉낙타", address: "낙타사" },
  { name: "코끼리", address: "대동물관" },
  { name: "사슴", address: "초식동물관" },
  { name: "두루미", address: "큰물새장" },
  { name: "황새", address: "황새마을" },
  { name: "사막여우", address: "제3아프리카관" },
  { name: "코뿔소", address: "대동물관" },
  { name: "하마", address: "실내관" },
];

const ZooLandMark = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 검색어에 맞는 동물 리스트 필터링
  const filteredList = ZooList.filter(
    animal =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.address.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h2>
        문제 1.
        <p>
          동물원 지도 만들어 보았습니다.
          <br />
           검색어에 동물 이름 또는 장소명이 일치시 분홍색을 bold
          처리하였습니다 .
        </p>
        <img
          style={{ width: "80%", height: "500px" }}
          src={imageSrc}
          alt="Zoo"
        />
      </h2>
      <h3 style={{ color: "#508637" }}>[동물원 검색 기능]</h3>
      <input
        type="text"
        placeholder="동물을 검색하세요"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul style={{ display: "flex", flexDirection: "column-reverse" }}>
        {filteredList.map((animal, index) => (
          <li
            key={index}
            style={{
              color:
                animal.name.toLowerCase() === searchTerm.toLowerCase() ||
                animal.address.toLowerCase() === searchTerm.toLowerCase()
                  ? "rgb(255 186 243)"
                  : "initial",
            }}
          >
            {/* 검색어와 동물 이름이 정확히 일치할 때만 bold 처리 */}
            {animal.name.toLowerCase() === searchTerm.toLowerCase() ? (
              <b>동물:{animal.name}</b>
            ) : (
              animal.name
            )}
            {/* gender 정보를 추가하여 표시 */}
            <div style={{ marginInline: "50px" }}>
              <span style={{ marginInline: "75px" }}>
                {/* 장소: {animal.address} */}
                {animal.address.toLowerCase() === searchTerm.toLowerCase() ? (
                  <b>장소:{animal.address}</b>
                ) : (
                  animal.address
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZooLandMark;
