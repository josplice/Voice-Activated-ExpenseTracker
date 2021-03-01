import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
	{
		'amount': 100,
		'category': 'Investments',
		'type': 'Income',
		'date': '2020-04',
		'id': '6ece3d2f-a341-4941-8cfc-4357e625a31d',
	},
	{
		'amount': 100,
		'category': 'Investments',
		'type': 'Income',
		'date': '2020-12-21',
		'id': 'b11ebd8d-5154-4c8f-af7f-9208d86e524a',
	},
	{
		'amount': 100,
		'category': 'Travel',
		'type': 'Expense',
		'date': '2020-12-21',
		'id': '63e4eb66-e0dd-4ef3-9141-36f727a09c7e',
	},
	{
		'amount': 50,
		'category': 'Business',
		'type': 'Income',
		'date': '2020-12-23',
		'id': 'a8feaf31-7237-4a9f-8a14-28773af142ff',
	},
]

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
	const [transactions, dispatch] = useReducer(contextReducer, initialState)

	// Action Creators
	const deleteTransaction = (id) => {
		dispatch({ type: 'DELETE_TRANSACTION', payload: id })
	}

	const addTransaction = (transaction) => {
		dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
	}

	const balance = transactions.reduce(
		(acc, currentValue) =>
			currentValue.type === 'Expense'
				? acc - currentValue.amount
				: acc + currentValue.amount,
		0,
	)

	return (
		<ExpenseTrackerContext.Provider
			value={{ deleteTransaction, addTransaction, transactions, balance }}
		>
			{children}
		</ExpenseTrackerContext.Provider>
	)
}
