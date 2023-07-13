import React from "react";


/**
 * 현재 시간을 반환해주는 함수
 * @param {_}
 * @returns 현재 시간을 string형식으로 합쳐서 반환
 */

/**
 * 현재 시간을 알려줌
 * @param {*} 
 * @returns ㄹ
 */
export const CurrentTimer = () => {
  const date = new Date();
  const year = String(date.getFullYear()).slice(2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

