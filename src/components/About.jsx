import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            Tốt nghiệp loại Giỏi khoa Công nghệ Thông tin trường Cao Đẳng An Ninh Mạng ISPACE. Được đào tạo chuyên sâu về thiết kế website và phát triển phần mềm và có kinh nghiệm quản lý dự án trong vai trò Leader của nhiều CLB. Luôn chủ động học hỏi và tham gia các chương trình tập huấn chuyên môn để nâng cao trình độ và thực hành kỹ năng. 
            </p>
        </div>
    </div>
  )
}

export default About;