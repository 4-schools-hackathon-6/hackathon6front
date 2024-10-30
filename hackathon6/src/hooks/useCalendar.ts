const useCalendar = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const nowMonth = today.getMonth() + 1;

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - currentDay);

  const weakList = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(sunday);
    date.setDate(sunday.getDate() + i);
    weakList.push(date.getDate());
  }

  return { weakList, nowMonth };
};

export default useCalendar;
