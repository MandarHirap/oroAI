type Props = {

    title:string;

    value:string;

    growth:string;

}

export default function KPICard({

title,

value,

growth,

}:Props){

return(

<div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6">

<p className="text-gray-500">
{title}
</p>

<h2 className="text-4xl font-bold mt-3">
{value}
</h2>

<p className="text-green-600 font-medium mt-3">
{growth}
</p>

</div>

)

}