"use client";

import { useMemo, useState } from "react";

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "number" | "toggle";
  suffix?: string;
};

type CalculatorDefinition = {
  id: string;
  title: string;
  description: string;
  fields: Field[];
  compute: (values: Record<string, string>) => { label: string; value: string }[];
};

const formatValue = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(value);

const calculators: CalculatorDefinition[] = [
  {
    id: "gst",
    title: "GST Calculator",
    description: "Quick GST estimate for any taxable amount.",
    fields: [
      { name: "amount", label: "Amount", placeholder: "100000" },
      { name: "rate", label: "GST Rate (%)", placeholder: "18" },
    ],
    compute: (values) => {
      const amount = Number(values.amount || 0);
      const rate = Number(values.rate || 0);
      const gst = (amount * rate) / 100;
      return [
        { label: "GST Amount", value: formatValue(gst) },
        { label: "Total", value: formatValue(amount + gst) },
      ];
    },
  },
  {
    id: "tax",
    title: "Tax Calculator",
    description: "Estimate tax based on a flat rate.",
    fields: [
      { name: "income", label: "Taxable Income", placeholder: "1200000" },
      { name: "rate", label: "Tax Rate (%)", placeholder: "20" },
    ],
    compute: (values) => {
      const income = Number(values.income || 0);
      const rate = Number(values.rate || 0);
      return [{ label: "Estimated Tax", value: formatValue((income * rate) / 100) }];
    },
  },
  {
    id: "tds",
    title: "TDS Calculator",
    description: "Compute TDS deduction quickly.",
    fields: [
      { name: "amount", label: "Payment Amount", placeholder: "250000" },
      { name: "rate", label: "TDS Rate (%)", placeholder: "10" },
    ],
    compute: (values) => {
      const amount = Number(values.amount || 0);
      const rate = Number(values.rate || 0);
      return [{ label: "TDS", value: formatValue((amount * rate) / 100) }];
    },
  },
  {
    id: "net-profit",
    title: "Net Profit Calculator",
    description: "Calculate profitability after expenses.",
    fields: [
      { name: "revenue", label: "Revenue", placeholder: "950000" },
      { name: "expenses", label: "Expenses", placeholder: "625000" },
    ],
    compute: (values) => {
      const revenue = Number(values.revenue || 0);
      const expenses = Number(values.expenses || 0);
      return [{ label: "Net Profit", value: formatValue(revenue - expenses) }];
    },
  },
  {
    id: "net-worth",
    title: "Net Worth Calculator",
    description: "Assets minus liabilities.",
    fields: [
      { name: "assets", label: "Total Assets", placeholder: "2400000" },
      { name: "liabilities", label: "Total Liabilities", placeholder: "800000" },
    ],
    compute: (values) => {
      const assets = Number(values.assets || 0);
      const liabilities = Number(values.liabilities || 0);
      return [{ label: "Net Worth", value: formatValue(assets - liabilities) }];
    },
  },
  {
    id: "effective-capital",
    title: "Effective Capital Calculator",
    description: "Estimate effective capital for funding decisions.",
    fields: [
      { name: "assets", label: "Total Assets", placeholder: "3200000" },
      {
        name: "currentLiabilities",
        label: "Current Liabilities",
        placeholder: "600000",
      },
    ],
    compute: (values) => {
      const assets = Number(values.assets || 0);
      const liabilities = Number(values.currentLiabilities || 0);
      return [
        {
          label: "Effective Capital",
          value: formatValue(assets - liabilities),
        },
      ];
    },
  },
  {
    id: "hra",
    title: "HRA Calculator",
    description: "Estimate eligible HRA exemption.",
    fields: [
      { name: "basic", label: "Basic Salary", placeholder: "600000" },
      { name: "hra", label: "HRA Received", placeholder: "240000" },
      { name: "rent", label: "Annual Rent Paid", placeholder: "300000" },
      { name: "metro", label: "Metro City", type: "toggle" },
    ],
    compute: (values) => {
      const basic = Number(values.basic || 0);
      const hra = Number(values.hra || 0);
      const rent = Number(values.rent || 0);
      const metro = values.metro === "true";
      const percent = metro ? 0.5 : 0.4;
      const exemption = Math.min(hra, basic * percent, rent - 0.1 * basic);
      return [
        {
          label: "Eligible Exemption",
          value: formatValue(Math.max(0, exemption)),
        },
      ];
    },
  },
  {
    id: "nsc",
    title: "NSC Calculator",
    description: "Projected maturity using compounding.",
    fields: [
      { name: "principal", label: "Principal", placeholder: "100000" },
      { name: "rate", label: "Interest Rate (%)", placeholder: "7.7" },
      { name: "years", label: "Years", placeholder: "5" },
    ],
    compute: (values) => {
      const principal = Number(values.principal || 0);
      const rate = Number(values.rate || 0);
      const years = Number(values.years || 0);
      const maturity = principal * Math.pow(1 + rate / 100, years);
      return [{ label: "Maturity Value", value: formatValue(maturity) }];
    },
  },
  {
    id: "emi",
    title: "EMI Calculator",
    description: "Monthly installment for any loan.",
    fields: [
      { name: "principal", label: "Loan Amount", placeholder: "1500000" },
      { name: "rate", label: "Interest Rate (%)", placeholder: "9" },
      { name: "months", label: "Tenure (months)", placeholder: "120" },
    ],
    compute: (values) => {
      const principal = Number(values.principal || 0);
      const rate = Number(values.rate || 0) / 1200;
      const months = Number(values.months || 0);
      if (!months || !rate) {
        return [{ label: "Monthly EMI", value: "0" }];
      }
      const emi =
        (principal * rate * Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);
      return [{ label: "Monthly EMI", value: formatValue(emi) }];
    },
  },
  {
    id: "auto-loan",
    title: "Auto Loan Calculator",
    description: "Estimate EMI for auto loans.",
    fields: [
      { name: "principal", label: "Loan Amount", placeholder: "800000" },
      { name: "rate", label: "Interest Rate (%)", placeholder: "8.5" },
      { name: "months", label: "Tenure (months)", placeholder: "60" },
    ],
    compute: (values) => {
      const principal = Number(values.principal || 0);
      const rate = Number(values.rate || 0) / 1200;
      const months = Number(values.months || 0);
      if (!months || !rate) {
        return [{ label: "Monthly EMI", value: "0" }];
      }
      const emi =
        (principal * rate * Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);
      return [{ label: "Monthly EMI", value: formatValue(emi) }];
    },
  },
  {
    id: "home-loan",
    title: "Home Loan Calculator",
    description: "Estimate EMI for home loans.",
    fields: [
      { name: "principal", label: "Loan Amount", placeholder: "4500000" },
      { name: "rate", label: "Interest Rate (%)", placeholder: "8.1" },
      { name: "months", label: "Tenure (months)", placeholder: "240" },
    ],
    compute: (values) => {
      const principal = Number(values.principal || 0);
      const rate = Number(values.rate || 0) / 1200;
      const months = Number(values.months || 0);
      if (!months || !rate) {
        return [{ label: "Monthly EMI", value: "0" }];
      }
      const emi =
        (principal * rate * Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);
      return [{ label: "Monthly EMI", value: formatValue(emi) }];
    },
  },
  {
    id: "installment",
    title: "Installment Calculator",
    description: "Flexible installment planning.",
    fields: [
      { name: "principal", label: "Amount", placeholder: "500000" },
      { name: "rate", label: "Interest Rate (%)", placeholder: "7" },
      { name: "months", label: "Tenure (months)", placeholder: "36" },
    ],
    compute: (values) => {
      const principal = Number(values.principal || 0);
      const rate = Number(values.rate || 0) / 1200;
      const months = Number(values.months || 0);
      if (!months || !rate) {
        return [{ label: "Monthly Installment", value: "0" }];
      }
      const installment =
        (principal * rate * Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);
      return [{ label: "Monthly Installment", value: formatValue(installment) }];
    },
  },
];

function CalculatorCard({ calculator }: { calculator: CalculatorDefinition }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [results, setResults] = useState<{ label: string; value: string }[]>(
    []
  );

  const onChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResults(calculator.compute(values));
  };

  const summary = useMemo(() => {
    if (results.length === 0) {
      return "";
    }
    return results.map((item) => `${item.label}: ${item.value}`).join(" | ");
  }, [results]);

  return (
    <div className="glass-panel rounded-3xl p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-navy-900">
          {calculator.title}
        </h3>
        <p className="text-sm text-slate-600">{calculator.description}</p>
      </div>
      <form onSubmit={onSubmit} className="mt-5 grid gap-4">
        {calculator.fields.map((field) => (
          <label key={field.name} className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-navy-900">
              {field.label}
            </span>
            {field.type === "toggle" ? (
              <select
                name={field.name}
                onChange={(event) => onChange(field.name, event.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={(event) => onChange(field.name, event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm"
                />
                {field.suffix ? (
                  <span className="text-xs text-slate-500">{field.suffix}</span>
                ) : null}
              </div>
            )}
          </label>
        ))}
        <button
          type="submit"
          className="rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-ivory transition hover:bg-navy-800"
        >
          Calculate
        </button>
      </form>
      {results.length > 0 ? (
        <div className="mt-4 rounded-2xl bg-white/80 p-4 text-xs text-navy-900">
          <div className="font-semibold">Result</div>
          <div className="mt-2 text-slate-600">{summary}</div>
        </div>
      ) : null}
    </div>
  );
}

export default function Calculators() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {calculators.map((calculator) => (
        <CalculatorCard key={calculator.id} calculator={calculator} />
      ))}
    </div>
  );
}
