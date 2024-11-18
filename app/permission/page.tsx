'use client';

import React, { useState } from 'react';
import { TeacherPermission } from '../../components/Permission/TeacherPermission';
import { DepartmentHeadPermission } from '../../components/Permission/DepartmentHeadPermission';
import { Input } from '@/components/ui/input';

const PermissionPage = () => {
  const [days, setDays] = useState(0);
  const [result, setResult] = useState('');

  const handleRequest = () => {
    const teacher = new TeacherPermission();
    const departmentHead = new DepartmentHeadPermission();
    // Хэрэгжүүлэх:
    // сургалтын алба 60-дээш хоног буюу хагас жилийн чөлөө олгоно.
    // 8-59 хоногийн хооронд чөлөө болгох боломжгүй гэсэн тайлбар бүхий чөлөөний бичиг өгөгдөнө.
    teacher.setNext(departmentHead);
    setResult(teacher.handleRequest(days));
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
      <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold text-center mb-4'>
          Чөлөөний хүсэлт
        </h2>
        <label className='block mb-4'>
          <span className='text-gray-700'>Хоногийн тоо:</span>
          <Input
            type='number'
            className='w-full mt-1 text-black'
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </label>
        <button
          onClick={handleRequest}
          className='w-full py-2 mt-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600'
        >
          Илгээх
        </button>

        <p className='mt-4 text-center text-gray-700'>
          <strong>Хариу:</strong> {result}
        </p>
      </div>

      <div className='mt-6'>
        <h3 className='text-lg font-semibold text-gray-700'>
          Хэрэгжүүлэх Даалгаврууд:
        </h3>
        <ul className='list-disc list-inside text-gray-700 mt-2'>
          <li>
            <strong>1. Chain of responsibility - PermissionHandler</strong>
            <br />
            Зөвшөөрлийн Түвшин Нэмэх: Захирлын зөвшөөрөл эсвэл даргын зөвшөөрөл
            гэх мэт нэмэлт зөвшөөрөгчдийг гинжид нэмнэ.
            <br />
            <code className='bg-gray-200 text-[#b45309] p-1 rounded block mt-1'>
              const directorPermission = new DirectorPermission();
              <br />
              departmentHead.setNext(directorPermission);
            </code>
          </li>
          <li className='mt-2'>
            <strong>2. Нөхцөлийг Өөрчлөх:</strong>
            <br />
            Зөвшөөрөл олгох хоногийн тоог өөрчлөх эсвэл тусгай дүрмийг нэмнэ.
            <br />
            Жишээлбэл: 60-с дээш хоногийн чөлөө нь захирлын зөвшөөрөлтэй байх
            шаардлагатай.
            <br />
            <code className='bg-gray-200 text-[#b45309] p-1 rounded block mt-1'>
              teacher.setApprovalCriteria(days);
            </code>
          </li>
          <li className='mt-2'>
            <strong>5. Гинжийг Харагдуулах:</strong>
            <br />
            UI-д зөвшөөрөл олгох үе шат бүрийг харуулах, хэн зөвшөөрсөн эсвэл
            татгалзсаныг хэрэглэгчдэд харуулна.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PermissionPage;
