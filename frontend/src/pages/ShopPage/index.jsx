import React from "react";
import "./stylesheet.scss";

export default function ShopPage() {
  const category = [
    "전체",
    "컴퓨터 공학",
    "IT 일반",
    "개발방법론",
    "웹프로그래밍",
    "프로그래밍 언어",
    "인터뷰",
  ];
  return (
    <div className="ShopPage">
      <div className="container">
        <div className="header">
          {category.map((value, index) => {
            return category.length - 1 !== index ? (
              <>
                <span key={index}>{value}</span>
                <span key={index}>|</span>
              </>
            ) : (
              <span key={index}>{value}</span>
            );
          })}
        </div>
        <div className="content">
          
        </div>
      </div>
    </div>
  );
}
