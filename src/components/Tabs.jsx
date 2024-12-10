import React from 'react'
import { useTodoContext } from '../context/todo-context';

export default function Header({ selectedTab, setSelectedTab }) {
  const { total, openCount } = useTodoContext()
  const tabsRef = React.useRef(['All', 'Open', 'Completed']);
  return (
    <nav className='tab-container'>
      {tabsRef.current.map((tab, tabIndex) => {
        const count = tab === 'All' ? total : tab === 'Open' ? total - openCount : openCount
        return <button
          className={`tab-button ${selectedTab === tab ? 'tab-selected' : ''}`}
          key={tabIndex}
          onClick={() => setSelectedTab(tab)}
        >
          <h4>
            {tab}
            <span>({count})</span>
          </h4>
        </button>
      })}
      <hr />
    </nav>
  )
}
