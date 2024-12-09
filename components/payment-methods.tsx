import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaBitcoin } from 'react-icons/fa'

export function PaymentMethods() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Accepted Payment Methods</h3>
      <div className="flex gap-3">
        <FaCcVisa className="text-3xl text-blue-600" />
        <FaCcMastercard className="text-3xl text-red-500" />
        <FaCcPaypal className="text-3xl text-blue-800" />
        <FaBitcoin className="text-3xl text-orange-500" />
      </div>
    </div>
  )
}

