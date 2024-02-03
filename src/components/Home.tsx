'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';

const HomeComponent = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		if (count >= 0 && count <= 180) {
			setCount((c) => c + 30);
		} else {
			setCount((c) => c - 30);
		}
	};

	return (
		<div>
			<div className='w-full justify-center items-center flex my-4'>
				<Image
					src='https://media.tenor.com/eiMqmu0vXz8AAAAi/kiss.gif'
					alt='Teddys Kissing'
					width={200}
					height={300}
				/>
			</div>

			<div className='w-full justify-center items-center flex my-4'>
				<p className='text-center text-5xl'>Will you be my valentine?</p>
			</div>
			<div className='flex flex-row w-full justify-center items-center my-4'>
				<div className='mx-1'>
					<Button
						className='bg-green-500'
						style={{
							height: 35 + count,
							width: 50 + count,
						}}>
						<p
							style={{
								fontSize: count > 0 ? count / 2 : 14,
							}}>
							Yes
						</p>
					</Button>
				</div>
				<div className='mx-1'>
					<Button className='bg-red-500' onClick={handleClick}>
						No
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HomeComponent;
