import React from 'react';

export default function DashboardPage() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <div className='px-[15px] py-4 bg-white'>
          <h2 className='text-lg text-gray-950'>Account Settings</h2>
        </div>
        <div className='px-[20px]'>
          <div className='flex py-[28px]'>
            <div
              className="relative rounded-full h-[68px] w-[68px]"
              style={{ backgroundColor: '#C5BDB5' }}
            >
              <img
                src="/sample2.jpg"
                alt="Profile"
                className="h-full w-full rounded-full object-cover"
              />
              <div
                className="absolute bottom-1 right-0 bg-white rounded-full shadow"
                style={{ backgroundColor: '#6C25FF', padding: '3px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6C25FF" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              </div>
            </div>
            <div className='text-sm ml-5'>
              <p className='font-semibold'>Marry Doe</p>
              <p>Marry@Gmail.Com</p>
            </div>
          </div>
          <p
            style={{ fontSize: '13px' }}
            className='text-gray-600 font-medium -mt-1'
          >Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
        <div className='dotted-line mt-4'></div>
      </div>
      <div className='dotted-line mb-8'></div>
    </div>
  )
}
