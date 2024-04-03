import React, { useState } from "react"
import { time } from "../helper-functions/dateTime"

const SelectTime = () => {
  const [timeSelected, setTimeSelected] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <div className="w-[300px] h-[720px] bg-white">
      <div className="text-[20px] pt-[110px] mb-[43px]">
        Thursday, November 30
      </div>
      <div className="overflow-auto h-[504px]">
        {time.map((t, index) => (
          <div key={index}>
            {/* {!timeSelected && (
              <button
                className="h-[61px] w-[215px] text-[19px] text-[#0269fe] font-bold rounded-md border mb-[12px] border-[2px] border-[#8daaea] hover:bg-[#0269fe] hover:text-white hover:border-none"
                // onClick={() => setTimeSelected(!timeSelected)}
                onClick={() => selectedIndex(index)}
              >
                {t}
              </button>
            )}
            {timeSelected && (
              <div key={index} className="flex">
                <button
                  className="h-[61px] w-[105px] mr-[6px] text-[19px] text-[#0269fe] font-bold rounded-md border mb-[12px] border-[2px] border-[#8daaea] hover:bg-[#0269fe] hover:text-white hover:border-none"
                  onClick={() => setTimeSelected(!timeSelected)}
                >
                  {t}
                </button>
                <button className="h-[61px] w-[105px] text-[19px] text-[#0269fe] font-bold rounded-md border mb-[12px] border-[2px] border-[#8daaea] hover:bg-[#0269fe] hover:text-white hover:border-none">
                  Next
                </button>
              </div>
            )} */}
            {selectedIndex !== index ? (
              <button
                className="h-[61px] w-[215px] text-[19px] text-[#0269fe] font-bold rounded-md border mb-[12px] border-[2px] border-[#8daaea] hover:bg-[#0269fe] hover:text-white hover:border-none"
                // onClick={() => setTimeSelected(!timeSelected)}
                onClick={() => setSelectedIndex(index)}
              >
                {t}
              </button>
            ) : (
              <div key={index} className="flex">
                <button
                  className="h-[61px] w-[105px] mr-[6px] text-[19px] text-[#0269fe] font-bold rounded-md border mb-[12px] border-[2px] border-[#8daaea] hover:bg-[#0269fe] hover:text-white hover:border-none"
                  onClick={() => setSelectedIndex(-1)}
                >
                  {t}
                </button>
                <button className="h-[61px] w-[105px] text-[19px] text-[#0269fe] font-bold rounded-md border mb-[12px] border-[2px] border-[#8daaea] hover:bg-[#0269fe] hover:text-white hover:border-none">
                  Next
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectTime
