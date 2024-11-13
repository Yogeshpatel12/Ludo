import { useEffect } from 'react'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'

const TDSDeductionPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="bg-[#070210]">
      <Container>
        <div className='w-full mx-auto max-w-screen-2xl'>
          <Heading title="TDS Policy" />
          <div className=' text-white text-left space-y-4 my-8'>
            <p>TDS (Tax Deducted at Source) is the tax amount applicable to your Net Winnings as per government regulations. </p>
            <p>TDS is calculated as 30% of your Net Winnings in a financial year starting from 1st April 2023. </p>
            <p>According to the law, TDS will be deducted at 30% of your net winnings at the time of withdrawal. </p>
            <p>For reference, </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Net winnings = The difference between Total Withdrawals in a financial year and Total Deposits in the same financial year. </li>
              <li>A financial year is counted from 1st April to 31st March.</li>
              <li>For example,</li>
              <li>If you have deposited a total of Rs 5,000 in the year, and won the game of having a prize pool of Rs. 9500, your Net Winnings will be = (9500 – 5,000) = Rs 4500, and TDS will be deducted @ 30% on 4500. 30% tax as TDS will be deducted from net winnings at the time of withdrawal. </li>
              <li>In case of no withdrawal in the entire financial year, TDS will get deducted from net winnings as on 31 March 2024. </li>
            </ul>
            <p>subject to change as per the rules that are to be notified under the Income Tax 1961</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TDSDeductionPolicy