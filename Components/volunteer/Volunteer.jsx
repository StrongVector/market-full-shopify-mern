import React from 'react'
import Table from '../Utils/tables/Table'

const Volunteer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 p-3 '>
        <p className='text-sm p-3 '>
يساعد التطوّع في : " تقدير قيمة الحياة
 "، ففي لحظات الكارثة تتجلى 
 القيم الإنسانية بشكلها
  المجرد، كالنجدة والتعاون 
  والمؤازرة والكرم والمساندة،
   يُعرّف العمل التطوعي على 
 أنَّه نشاط يتم إجراؤه داخل مُبادرة
  أو منظمة ما، وهو غير مدفوع 
  الأجر، ويتم اختياره بحرية.
        </p>
        <Table/>
    </div>
  )
}

export default Volunteer