import React, { memo } from 'react';
import classNames from 'classnames';
import Card, { CardBody, CardHeader, CardLabel, CardTitle } from '../bootstrap/Card';
import Popovers from '../bootstrap/Popovers';
import Icon from '../icon/Icon';

interface ValueCard {
	color?: any;
	label: string;
	value?: any;
	description: string;
}
const CardValue = ({ label, value, description, color }: ValueCard) => {
	return (
		<Card
			style={{ height: '90%' }}
			borderColor={color}
			borderSize={3}
			className={classNames(
				'transition-base rounded-2 mb-4 pt-0 mt-0 text-dark jus',
				// classNameColor,
			)}
			shadow='lg'>
			<div className='mt-2 d-flex flex-column justify-content-between'>

				<CardHeader size='sm' className='bg-transparent pt-0 mt-0 px-0 pb-0 align-content-end justify-content-center'>
					<CardLabel>
						<CardTitle tag='h4' className='fs-4 text-dark p-0 m-0 text-center'>
							{label}
						</CardTitle>
					</CardLabel>
					<Popovers
						// trigger='hover'
						desc={
							<>
								<div className='h6'> {label}</div>
								<div>
									<b>Descrição: {description}</b>
								</div>
							</>
						}>
						<div className='position-relative'>
							{description && <Icon icon='Info' size='2x' />}
						</div>
					</Popovers>
				</CardHeader>
				<CardBody className='p-0 pb-3 pt-2'>
					<div className='d-flex align-items-center p-0'>
						<div className='flex-grow-1 ms-0'>
							<div className='fs-3 mb-0 text-center text-dark'>{value}</div>
						</div>
					</div>
				</CardBody>
			</div>
		</Card>
	);
};

export default memo(CardValue);
