import React from 'react'
import SubTitle from '../../Utils/SubTitle'

const UrpanWarfare = () => {
    const advices = [
        {title:'',
        text:''},
        {title:'',
        text:''},
         {title:'',
        text:''},
         {title:'',
        text:''},
    ]
  return (
    <div className='flex flex-col justify-center items-center gap-3 p-4 px-8'>
        <div  className='flex flex-col justify-center items-center gap-3 flex-wrap'>
            <div className='lg:w-10/12 flex flex-col justify-center items-center gap-3 bg-white p-6 rounded-lg'>
                <h3 className='text-xl font-semibold'> 
                    الإجراءات الوقائيَّة قبل القصف الجويِّ أو المدفعي
                </h3>
                <ul className='flex flex-col justify-center items-start gap-2'>
                    <li>
                    1- المحافظة على الهدوء.
                    </li>
                    <li>
                
2- إختيار غرفة داخلية بها عدد قليل من النوافذ والجدران الخارجية.
                    </li>
                    <li>
                        
3- النزول للطوابق الأرضية لأنها قادرة على تحمل الوزن وتبقى ثابتة بعد القصف.</li>

<li>4- الإبتعاد عن النوافذ والأبواب والزجاج.</li>
<li>
5- قم بإزالة الأشياء الثقيلة التي يمكن أن تقذف بإتجاهك أثناء حدوث الإنفجار.</li>
<li>6- ترك النوافذ مفتوحة مسافة 10 سم على أقل تقدير، ثم قم بوضع لاصق عليها في شكل حرف X.</li>
                </ul>
            </div>
            <div className='lg:w-10/12 flex flex-col justify-center items-center gap-3 bg-white p-6 rounded-lg'>
                <h3 className='text-xl font-semibold'> 
                الإجراءات الوقائيَّة أثناء القصف الجوي أو المدفعي                </h3>
                <ul className='flex flex-col justify-center items-start gap-2'>
                    <li>1- عدم التجمهر في أماكن القصف. </li>
                    <li>
                

                    2- المحافظة على الأطفال بالداخل وعدم تركهم لوحدهم.                    </li>
                    <li>
                        

                    2- المحافظة على الأطفال بالداخل وعدم تركهم لوحدهم.</li>

<li>

4- الإحتماء في مكان آمن ومغطى جيداً.
</li>
<li>
ً.
5- الإتصال بأرقام الطوارئ ( إسعاف، شرطة، دفاع مدني، العمليات المركزية، أو بقريب ).</li>

<li>

6- عدم التحرك بالسيارة.    </li>
                </ul>
            </div>
            <div className='lg:w-10/12 flex flex-col justify-center items-center gap-3 bg-white p-6 rounded-lg'>
                <h3 className='text-xl font-semibold'> 
                الإجراءات الوقائيَّة بعد القصف الجوي أو المدفعي                </h3>
                <ul className='flex flex-col justify-center items-start gap-2'>
                    <li>
                 
1- عدم التجمهر في أماكن القصف أو أنقاض البنايات.
                    </li>
                    <li>
                


                    2- ترك أطقم الطوارئ للقيام بواجبها.                                  </li>
                    <li>
                        


                    3- العمل على إخلاء ما يمكن إخلاؤه دون الدخول في مخاطرة.                    </li>

<li>


4- المساعدة في نقل الجرحى والمصابين وإبعادهم عن أماكن القصف.</li>
<li>


4- المساعدة في نقل الجرحى والمصابين وإبعادهم عن أماكن القصف.</li>

                </ul>
            </div>
            
        </div>

    </div>
  )
}

export default UrpanWarfare