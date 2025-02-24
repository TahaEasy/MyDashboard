const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full min-h-dvh">
      <div className="text-center mb-20">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-[spin_2s_linear_infinite] border-purple-600 mx-auto"></div>
        <h2 className="text-text mt-4">در حال بارگذاری...</h2>
        <p className="text-grayish">لطفا تا تکمیل فرایند شکیبا باشید</p>
      </div>
    </div>
  );
};

export default Loading;
