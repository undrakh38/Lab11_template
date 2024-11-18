'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 gap-8 font-sans'>
      <header className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Design Patterns </h1>
        <p className='text-lg'>
          Доорх дасгал бүр дээр дарж даалгаварыг харна уу.
        </p>
      </header>

      <main className='flex flex-col gap-4 w-full max-w-md'>
        <Link href='/permission'>
          <p className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center shadow-md shadow-black'>
            Chain of Responsibility - Чөлөөний хүсэлт
          </p>
        </Link>
        <p className='bg-[#fed7aa] p-1 rounded-sm'>
          Дээрх даалгавар нь Оюутанд багш 1 хоногийн чөлөө, тэнхимийн эрхлэгч 7
          хоног, сургалтын алба 60-дээш хоног буюу хагас жилийн чөлөө олгоно.
          8-59 хоногийн хооронд чөлөө болгох боломжгүй гэсэн тайлбар бүхий
          чөлөөний бичиг өгөгдөнө. Оюутны чөлөө олгох системийг chain of
          responsibility зохиомжийн паттерн ашиглан хийж үзэх болно.
        </p>
        {/* <Link href='/survey'>
          <a className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-center'>
            Command Pattern - Survey Commands
          </a>
        </Link>
        <Link href='/course-selection'>
          <a className='bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 text-center'>
            Memento Pattern - Course Selection History
          </a>
        </Link>
        <Link href='/job-post'>
          <a className='bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 text-center'>
            Observer Pattern - Job Notifications
          </a>
        </Link>
        <Link href='/application'>
          <a className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 text-center'>
            Template Pattern - Document Processing
          </a>
        </Link> */}
      </main>

      <footer className='mt-8 text-sm text-center'>
        <p>&quot;Программ хангамжийн зохиомж ба архитектур&quot; Н.Мөнхцэцэг</p>
      </footer>
    </div>
  );
}
