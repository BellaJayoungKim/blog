export const publicUrl = process.env.PUBLIC_URL;

// 헥스 컬러
export const getRandomHexColor = () => {
  const letters = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)];
  }
  return hex;
};

