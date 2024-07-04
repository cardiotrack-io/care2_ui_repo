const CustomerDetailsForm = () => {
  return (
    <div className="form_container flex flex-col items-start py-4 px-2 rounded-md bg-darkBlue bg-opacity-20 space-y-4">
      <div className="name_container w-full">
        <label
          htmlFor="customer_name"
          className="block text-darkBlue text-xs text-left font-semibold mb-2"
        >
          Enter your name
        </label>
        <input
          type="text"
          id="customer_name"
          placeholder="Enter your name"
          className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
        />
      </div>
      <div className="address_container w-full flex flex-col space-y-4">
        <div className="w-full">
          <label
            htmlFor="address_line_1"
            className="block text-darkBlue text-xs text-left font-semibold mb-2"
          >
            Address Line - 1
          </label>
          <textarea
            id="address_line_1"
            placeholder="Enter your Address"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="address_line_2"
            className="block text-darkBlue text-xs text-left font-semibold mb-2"
          >
            Address Line - 2
          </label>
          <textarea
            id="address_line_2"
            placeholder="Enter your Address"
            className="w-full border-darkBlue border-b-2 text-darkBlue bg-slate-50 bg-opacity-70 rounded-sm p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsForm;
