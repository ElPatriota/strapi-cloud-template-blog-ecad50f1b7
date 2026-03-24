module.exports = ({ env }) => ({
  cors: {
    enabled: true,
    headers: '*',
    origin: ['http://localhost:5173', 'https://algonada-quever.vercel.app/'],
  },
});