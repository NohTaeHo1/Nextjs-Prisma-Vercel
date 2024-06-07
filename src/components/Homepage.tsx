"use client";

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function Home() {
  function handleUsername(e: any): void {
    throw new Error("Function not implemented.");
  }

  function handlePassword(e: any): void {
    throw new Error("Function not implemented.");
  }

  function handleSubmit(e: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    
    <div className="text-center">
      <div className="text-3xl font-bold underline"></div>
      <tr>
        <td className="w-full bg-white  p-20 h-2 "></td>
      </tr>

      <div className="flex items-center justify-center w-full h-20">
        <div
          className="text-3xl font-bold underline"
          style={{
            backgroundImage: "url('/user/img/login_logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "200px",
            height: "200px",
          }}
        ></div>
      </div>
      <Typography
        variant='subtitle1'
        gutterBottom
        sx={{color: 'green', mt: 3}}>
          넥스트 샘플 페이지
          <Box sx={{ color: 'grey', fontSize: 10}}>
            프리즈마 / 버셀 / 리덕스 설정 완료
          </Box>
        </Typography>


      <br />
      <div className="flex items-center justify-center  w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
            style={{
              backgroundImage: "url('/user/img/cat.png')",
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                ID :
              </label>
              <input
                onChange={handleUsername}
                className="text-gray-700 border border-red-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                required
              />
            </div>

            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password :
                </label>
              </div>
              <input
                onChange={handlePassword}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
              />
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              ></a>
            </div>

            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                로그인
              </button>
            </div>
            <a
              href={``}
              className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="flex px-5 justify-center w-full py-3">
                <div className="min-w-[30px]">
                  <svg className="h-6 w-6" viewBox="0 0 40 40">
                    <image
                      href="/user/img/Logo.png"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                    />
                  </svg>
                </div>
                <div className="flex w-full justify-center">
                  <h1 className="whitespace-nowrap text-gray-600 font-bold">
                    BangEZ 회원가입
                  </h1>
                </div>
              </div>
            </a>
            <tr>
              <td className="w-full bg-white  h-20 "></td>
            </tr>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
