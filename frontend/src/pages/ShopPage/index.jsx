import React from 'react';
import './stylesheet.scss';
import Button from '../../components/Button';

export default function ShopPage() {
  const category = [
    '전체',
    '컴퓨터 공학',
    'IT 일반',
    '개발방법론',
    '웹프로그래밍',
    '프로그래밍 언어',
    '인터뷰',
  ];
  return (
    <div className="ShopPage">
      <div className="container">
        <div className="header">
          {category.map((value, index) => {
            return category.length - 1 === index ? (
              <span key={'a' + index}>{value}</span>
            ) : (
              <>
                {index === 0 ? (
                  <span className="font-green" key={'c' + index}>
                    {value}
                  </span>
                ) : (
                  <span key={'c' + index}>{value}</span>
                )}
                <span key={'b' + index}>|</span>
              </>
            );
          })}
        </div>
        <div className="content">
          {books.map((value, index) => {
            return (
              <div className="order-content">
                <img
                  className="image-each"
                  key={index}
                  src={value.src}
                  alt="book"
                />
                <div className="title">{value.title}</div>
                <div className="point">{value.price} Angel</div>
                <Button className="buy-it">구매하기</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const books = [
  {
    title: '유지보수하기 어렵게 코딩하는 방법',
    price: 1024,
    src: 'https://www.hanbit.co.kr/data/ebook/E2375873090_l.jpg',
  },
  {
    title: '코딩인터뷰 완전 정복',
    price: 1024,
    src: 'http://image.yes24.com/goods/44305533/800x0',
  },
  {
    title: '알고리즘 문제해결 전략',
    price: 1024,
    src: require('../../images/books/algorithm.png'),
  },
  {
    title: '미래를 바꾼 아홉가지 알고리즘',
    price: 1024,
    src: 'http://image.yes24.com/goods/8921236/L',
  },
  {
    title: '모두의 알고리즘 with 파이썬',
    price: 1024,
    src:
      'http://image.kyobobook.co.kr/images/book/xlarge/728/x9791160501728.jpg',
  },
  {
    title: 'Do it! 자료구조와 함께 배우는 알고리즘',
    price: 1024,
    src: 'http://image.yes24.com/goods/60547893/800x0',
  },
  {
    title: '파이썬 알고리즘 인터뷰',
    price: 1024,
    src: 'http://image.yes24.com/goods/91084402/800x0',
  },
  {
    title: '소프트 스킬',
    price: 1024,
    src: 'http://image.yes24.com/momo/TopCate878/MidCate006/66449912.jpg',
  },
  {
    title: '함께 자라기',
    price: 1024,
    src: 'http://image.yes24.com/goods/67350256/800x0',
  },
  {
    title: '클린 코드',
    price: 1024,
    src: 'http://image.yes24.com/goods/11681152/800x0',
  },
  {
    title: '리팩토링',
    price: 1024,
    src: 'http://image.yes24.com/goods/89649360/800x0',
  },
  {
    title: '테스트 주도 개발',
    price: 1024,
    src: 'http://bimage.interpark.com/goods_image/8/9/8/7/214078987g.jpg',
  },
];
