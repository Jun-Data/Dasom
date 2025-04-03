import React from 'react'
import { auth } from '@/auth'
import Image from 'next/image'

export default async function ProfilePage() {
    const session = await auth();

    if (!session) {
        return <div className='p-10 text-center text-xl'>로그인 해주세요!</div>;
    }
    const {name, email, image} = session.user ?? {};

    return (
        <div className='max-w-xl mx-auto mt-10 p-8 bg-white shadow-md rounded-lg'>
            <h1 className="text-2xl font-bold mb-6">👤 마이페이지</h1>
            <div className="flex items-center space-x-6">
        {/* 프로필 이미지 */}
        <Image
          src={image || "/images/avatar.png"} // 기본 이미지 처리
          alt="프로필 이미지"
          width={80}
          height={80}
          className="rounded-full"
        />

        {/* 텍스트 정보 */}
        <div>
          <p className="text-lg font-semibold">이름: {name}</p>
          <p className="text-gray-600">이메일: {email}</p>
        </div>
      </div>
    </div>
  );
}