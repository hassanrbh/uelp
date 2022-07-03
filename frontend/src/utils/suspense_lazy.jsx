import React, { Suspense } from 'react'

const SuspenseLazy = ({element}) => {
  return <Suspense fallback={<div />}>
      {element}
    </Suspense>
}

export default SuspenseLazy;