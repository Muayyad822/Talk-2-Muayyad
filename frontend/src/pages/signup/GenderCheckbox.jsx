const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex flex-col gap-2'>
			<label className='block text-sm md:text-base text-gray-200 mb-2'>
				Select Gender
			</label>
			<div className='flex gap-4 flex-wrap'>
				<label 
					className={`flex items-center gap-2 cursor-pointer rounded-lg p-2 flex-1
						${selectedGender === "male" 
							? "bg-blue-600 text-white" 
							: "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
				>
					<input
						type='radio'
						name='gender'
						className='radio radio-primary'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
					<span className='label-text'>👨 Male</span>
				</label>

				<label 
					className={`flex items-center gap-2 cursor-pointer rounded-lg p-2 flex-1
						${selectedGender === "female" 
							? "bg-pink-600 text-white" 
							: "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
				>
					<input
						type='radio'
						name='gender'
						className='radio radio-secondary'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
					<span className='label-text'>👩 Female</span>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;

// STARTER CODE FOR THIS FILE
// const GenderCheckbox = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Male</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Female</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };
// export default GenderCheckbox;
