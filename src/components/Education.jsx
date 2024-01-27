import React from 'react';

const Education = () => {
  return (
    <div name="education" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Education</p>
          
          
          <div className="flex">
            <ul className="list-disc pl-6 pr-12"> <br /> <br />

            <h3 className="text-xl font-bold">Cao Đẳng An Ninh Mạng ISPACE</h3>
            <h6 className="font-bold text-xs">From 2023 - 2025</h6> <br />
              <li>
                <p>Ngôn ngữ lập trình C#/Java/PHP</p>
                </li>
                <li><p>Cấu trúc dữ liệu và giải thuật</p></li>
                <li><p>Trí tuệ nhân tạo</p></li>
                <li><p>Lập trình hướng đối tượng</p></li>
                <li><p>Thiết kế Web</p></li>
              
            </ul>
            
            <ul className="list-disc pl-6"> <br /> <br />
              <li>
                <p className="text-xl font-bold">Trường THPT Ngô Gia Tự</p>
                <h6 className="font-bold text-xs">From 2018 - 2022</h6> <br />
              </li>
              <li>Lập trình ngôn ngữ cơ bản Pascal</li>
              <li>Tin học ứng dụng cơ bản</li>
              <li>Toán tin ứng dụng</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
