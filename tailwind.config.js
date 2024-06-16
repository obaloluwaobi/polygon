/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*./src/","./index.html"],
  theme: {
    extend: {colors:{
      bg:"#0F1624",
      g1:"#D91CAE",
     
    },
    fontSize:{
      'title':'45px',
      'bio':'18px',
      'pro':'40px',
      'p-title':'30px',
      'p-des':'18px',
      'm-title':'24px',
      'm-bio':'14px',
      'm-pro':'20px',
      'm-p-title':'16px',
      'm-p-des':'14px',
    },
    screens:{
      'xs':"300px",
      'sm': '640px',
      'md':"768px",
      'lg':"1024px",
      'xl':"1280px",
    }},
  },
  plugins: [],
}

