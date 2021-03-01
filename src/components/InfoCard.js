import React from 'react'

const isIncome = Math.round(Math.random())

const InfoCard = () => {
	return (
		<div style={{ textAlign: 'center', padding: '0 10%' }}>
			Try saying: <br />
			Add {isIncome ? 'Income ' : 'Expense '}
			for {isIncome ? 'R100 ' : 'R50 '}
			in category {isIncome ? 'Salary ' : 'Bills '}
			for {isIncome ? 'Monday ' : 'Tuesday '}
		</div>
	)
}

export default InfoCard
