export interface Question {
  id: number;
  question: string;
  choices: { label: string; text: string }[];
  answer: string; // label of the correct choice (a, b, c, or d)
}

export const questions: Question[] = [
  // Note: Item 1 was missing from the document (no question text provided).
  {
    id: 2,
    question: "What is a data warehouse?",
    choices: [
      { label: "a", text: "A system for recording only daily transaction" },
      { label: "b", text: "A centralized collection of integrated historical data for analysis" },
      { label: "c", text: "A program used only for payroll processing" },
      { label: "d", text: "A filing cabinet for printed accounting records" },
    ],
    answer: "b",
  },
  {
    id: 3,
    question: "Which characteristic of a data warehouse means that it stores data over time?",
    choices: [
      { label: "a", text: "Transactional" },
      { label: "b", text: "Volatile" },
      { label: "c", text: "Time-Variant" },
      { label: "d", text: "Temporary" },
    ],
    answer: "c",
  },
  {
    id: 4,
    question: "What does ETL mean in data warehousing?",
    choices: [
      { label: "a", text: "Export, Test, Log" },
      { label: "b", text: "Extract, Transform, Load" },
      { label: "c", text: "Enter, Track, List" },
      { label: "d", text: "Evaluate, Transfer, Link" },
    ],
    answer: "b",
  },
  {
    id: 5,
    question: "What is a data mart?",
    choices: [
      { label: "a", text: "A backup device for computer files" },
      { label: "b", text: "A source for entering invoices" },
      { label: "c", text: "A type of accounting journal" },
      { label: "d", text: "A smaller, subject-specific portion of a data warehouse" },
    ],
    answer: "d",
  },
  {
    id: 6,
    question: "What is metadata?",
    choices: [
      { label: "a", text: "A duplicate copy of transaction data" },
      { label: "b", text: "Information describing the source, structure and meaning of data" },
      { label: "c", text: "A list of company employees" },
      { label: "d", text: "A financial statement prepared every month" },
    ],
    answer: "b",
  },
  {
    id: 7,
    question: "Why is a data warehouse relevant to accounting?",
    choices: [
      { label: "a", text: "It supports reporting, auditing, and financial analysis" },
      { label: "b", text: "It prevents every accounting error automatically" },
      { label: "c", text: "It eliminates the need for accounting control" },
      { label: "d", text: "It replaces the general ledger completely" },
    ],
    answer: "a",
  },
  {
    id: 8,
    question:
      "An accounting department needs to combine data from its general ledger, payroll, and accounts payable systems. What is the main purpose of the data warehouse in this situation?",
    choices: [
      { label: "a", text: "To integrate data for unified reporting and analysis" },
      { label: "b", text: "To keep each system separate" },
      { label: "c", text: "To replace every transaction system" },
      { label: "d", text: "To store only current-day transactions" },
    ],
    answer: "a",
  },
  {
    id: 9,
    question:
      "Different branches use different formats for supplier codes. Which ETL process should standardize the supplier codes before loading them into the warehouse?",
    choices: [
      { label: "a", text: "Archive" },
      { label: "b", text: "Load" },
      { label: "c", text: "Extract" },
      { label: "d", text: "Transform" },
    ],
    answer: "d",
  },
  {
    id: 10,
    question:
      "An accounting warehouse includes Invoice Amount, Vendor Name, Department, and Invoice Date. Which item is most likely a fact?",
    choices: [
      { label: "a", text: "Invoice Amount" },
      { label: "b", text: "Invoice Date" },
      { label: "c", text: "Department" },
      { label: "d", text: "Vendor Name" },
    ],
    answer: "a",
  },
  {
    id: 11,
    question:
      "Which component temporarily holds source data before it is cleaned and loaded into warehouse?",
    choices: [
      { label: "a", text: "Dashboard" },
      { label: "b", text: "Data mart" },
      { label: "c", text: "Financial statement" },
      { label: "d", text: "Staging area" },
    ],
    answer: "d",
  },
  {
    id: 12,
    question:
      "The accounts-payable total in the warehouse is higher than the general-ledger balance. Which issue should the accountant investigate first?",
    choices: [
      { label: "a", text: "The company logo" },
      { label: "b", text: "Possible duplicate or incorrect invoice records" },
      { label: "c", text: "The number of report users" },
      { label: "d", text: "The dashboard colour theme" },
    ],
    answer: "b",
  },
  {
    id: 13,
    question:
      "A payroll system is updated daily, but the warehouse is refreshed only every Sunday. Why might the warehouse payroll total differ from today's payroll-system total?",
    choices: [
      { label: "a", text: "The warehouse may not yet include recent payroll transactions" },
      { label: "b", text: "Warehouse cannot store payroll data" },
      { label: "c", text: "The warehouse automatically changes payroll amounts" },
      { label: "d", text: "Payroll systems cannot process transactions" },
    ],
    answer: "a",
  },
  {
    id: 14,
    question:
      "Which control best protects confidential employee-payroll information stored in a data warehouse?",
    choices: [
      { label: "a", text: "Share payroll reports through public links" },
      { label: "b", text: "Give every employee full access" },
      { label: "c", text: "Remove passwords to simplify access" },
      { label: "d", text: "Apply role-based access controls" },
    ],
    answer: "d",
  },
  {
    id: 15,
    question:
      "An auditor needs to trace an expense reported in a dashboard back to its original invoice source system. Which feature is most helpful?",
    choices: [
      { label: "a", text: "Screen resolution" },
      { label: "b", text: "Internet speed" },
      { label: "c", text: "Data lineage and metadata" },
      { label: "d", text: "Printer settings" },
    ],
    answer: "c",
  },
  {
    id: 16,
    question:
      "A finance manager compares travel expenses for the current year with the previous three years. What data-warehouse benefit is being used?",
    choices: [
      { label: "a", text: "Historical trend analysis" },
      { label: "b", text: "Real-time transaction entry" },
      { label: "c", text: "Hardware maintenance" },
      { label: "d", text: "Paper-document storage" },
    ],
    answer: "a",
  },
  {
    id: 17,
    question:
      "Which sequence correctly shows the usual flow in a data warehouse architecture?",
    choices: [
      { label: "a", text: "Data warehouse – Source systems – ETL" },
      { label: "b", text: "Reports – Source systems – data warehouse" },
      { label: "c", text: "Source systems – Staging/ETL – data warehouse – reports" },
      { label: "d", text: "Dashboard – ETL – Source systems" },
    ],
    answer: "c",
  },
  {
    id: 18,
    question:
      "A company wants dependable monthly reports using sales, payroll, and accounts-payable information. Which proposal is the best solution?",
    choices: [
      { label: "a", text: "Use only payroll data for all financial reports" },
      { label: "b", text: "Integrate and validate the data in a centralized data warehouse" },
      { label: "c", text: "Delete historical data after each monthly report" },
      { label: "d", text: "Prepare all reports manually from separate files" },
    ],
    answer: "b",
  },
  {
    id: 19,
    question:
      "The IT team proposes loading accounting data without checking for duplicate invoices because it will save time. What is the best evaluation of this proposal?",
    choices: [
      { label: "a", text: "Reject it because duplicate data can cause inaccurate reports and audit issues" },
      { label: "b", text: "Approve it because faster loading is more important than accuracy" },
      { label: "c", text: "Approve it because duplicate records improve analysis" },
      { label: "d", text: "Approve it only for accounts-payable transactions" },
    ],
    answer: "a",
  },
  {
    id: 20,
    question:
      "A CFO asks for a new financial dashboard. Which group of measures is most appropriate to include?",
    choices: [
      { label: "a", text: "Revenue, operating expenses, cash balance, and accounts-receivable aging" },
      { label: "b", text: "Employee birthdays, printer usage, and office temperature" },
      { label: "c", text: "Internet speed, meeting-room use, and number of emails sent" },
      { label: "d", text: "Company logo colours, office locations, and desk assignments" },
    ],
    answer: "a",
  },
  {
    id: 21,
    question: "Which proposed architecture best supports accurate accounting analysis and reporting?",
    choices: [
      { label: "a", text: "Source systems – reports, with no validation or integration" },
      { label: "b", text: "Source systems – staging and validation – ETL – Data warehouse – accounting dashboards" },
    ],
    answer: "b",
  },
  {
    id: 22,
    question: "What is the main purpose of an Entity-Relationship (ER) model?",
    choices: [
      { label: "a", text: "To show entities, attributes, and relationships in a database" },
      { label: "b", text: "To create financial dashboards only" },
      { label: "c", text: "To calculate depreciation automatically" },
      { label: "d", text: "To prepare a trial balance" },
    ],
    answer: "a",
  },
  {
    id: 23,
    question: "In an accounting ER model, which is an example of an entity?",
    choices: [
      { label: "a", text: "Invoice" },
      { label: "b", text: "Vendor code" },
      { label: "c", text: "Invoice date" },
      { label: "d", text: "Invoice amount" },
    ],
    answer: "a",
  },
  {
    id: 24,
    question: "What is a primary key?",
    choices: [
      { label: "a", text: "A field used only for reports" },
      { label: "b", text: "A duplicate copy of a record" },
      { label: "c", text: "A field that stores the largest transaction amount" },
      { label: "d", text: "A field that uniquely identifies each record in a table" },
    ],
    answer: "d",
  },
  {
    id: 25,
    question: "What is the primary purpose of dimensional modelling?",
    choices: [
      { label: "a", text: "To process transaction as quickly as possible" },
      { label: "b", text: "To make data easier to analyze and report" },
      { label: "c", text: "To replace the accounting system" },
      { label: "d", text: "To remove all historical data" },
    ],
    answer: "b",
  },
  {
    id: 26,
    question:
      "Which schema usually has one central fact table connected directly to several dimension tables?",
    choices: [
      { label: "a", text: "Network schema" },
      { label: "b", text: "Hierarchical schema" },
      { label: "c", text: "Flat-file schema" },
      { label: "d", text: "Star schema" },
    ],
    answer: "d",
  },
  {
    id: 27,
    question:
      "One invoice can contain several invoice-line items. What is the correct relationship between invoice and invoice line?",
    choices: [
      { label: "a", text: "One-to-many" },
      { label: "b", text: "Many-to-Many" },
      { label: "c", text: "One-to-one" },
      { label: "d", text: "No relationship" },
    ],
    answer: "a",
  },
  {
    id: 28,
    question: "In a purchasing data warehouse, which item is most likely a fact?",
    choices: [
      { label: "a", text: "Supplier name" },
      { label: "b", text: "Account description" },
      { label: "c", text: "Purchase amount" },
      { label: "d", text: "Department name" },
    ],
    answer: "c",
  },
  {
    id: 29,
    question:
      "A finance manager wants to analyze expenses by account, department, supplier, and month. Which table should store descriptive information about each supplier?",
    choices: [
      { label: "a", text: "Transaction amount table" },
      { label: "b", text: "Supplier dimension table" },
      { label: "c", text: "Journal entry table" },
      { label: "d", text: "Fact expense table" },
    ],
    answer: "b",
  },
  {
    id: 30,
    question: "What does the grain of a fact table describe?",
    choices: [
      { label: "a", text: "The number of columns in a dimension table" },
      { label: "b", text: "The colour used in a dashboard" },
      { label: "c", text: "The level of detail represented by each row" },
      { label: "d", text: "The number of users of the warehouse" },
    ],
    answer: "c",
  },
  {
    id: 31,
    question: "A fact table records one row for every invoice line. Which combination best describes its grain?",
    choices: [
      { label: "a", text: "One row per supplier" },
      { label: "b", text: "One row per accounting period" },
      { label: "c", text: "One row per invoice line" },
      { label: "d", text: "One row per department" },
    ],
    answer: "c",
  },
  {
    id: 32,
    question: "Which set of fields is most appropriate for an Accounts Payable fact table?",
    choices: [
      { label: "a", text: "Supplier name, supplier address, and supplier contact number only" },
      { label: "b", text: "Employee name, job title, and office location only" },
      { label: "c", text: "Department name, account description, and month name only" },
      { label: "d", text: "Invoice amount, quantity, supplier key, date key, and account key" },
    ],
    answer: "d",
  },
  {
    id: 33,
    question:
      "A chart of accounts has Account Code, Account Name, Account Type, and Account Category. Where should these fields normally be stored in a dimensional model?",
    choices: [
      { label: "a", text: "Expense Fact table" },
      { label: "b", text: "Data Dimension table" },
      { label: "c", text: "Account Dimension table" },
      { label: "d", text: "Sales Fact table" },
    ],
    answer: "c",
  },
  {
    id: 34,
    question:
      "A company wants to reduce repeated data by separating Product Category and Product Sub-category into additional related tables. Which schema is most likely being used?",
    choices: [
      { label: "a", text: "Star schema" },
      { label: "b", text: "Transactional schema" },
      { label: "c", text: "Snowflake schema" },
      { label: "d", text: "Flat-file schema" },
    ],
    answer: "c",
  },
  {
    id: 35,
    question:
      "A company needs fast monthly reporting of expenses by department, account, supplier, and period. Which design is the best choice?",
    choices: [
      { label: "a", text: "A single spreadsheet containing all transactions and descriptions" },
      { label: "b", text: "A star schema with an Expense Fact table linked to Department, Account, Supplier, and Date dimensions" },
      { label: "c", text: "A system that stores only the current month's expenses" },
      { label: "d", text: "Separate files for each department with no common account codes" },
    ],
    answer: "b",
  },
  {
    id: 36,
    question:
      "An analyst proposes placing Supplier Name, Department Name, Account Name, and Invoice Amount in one fact table without dimensions. What is the best evaluation?",
    choices: [
      { label: "a", text: "Approve it because fact tables should contain all possible data" },
      { label: "b", text: "Approve it because it eliminates the need for relationships" },
      { label: "c", text: "Reject it because it creates repeated descriptive data and makes analysis less efficient" },
      { label: "d", text: "Reject it because invoice amounts should not be stored" },
    ],
    answer: "c",
  },
  {
    id: 37,
    question: "Which proposed model is best for creating an Accounts Payable reporting warehouse?",
    choices: [
      { label: "a", text: "A dashboard that receives data directly from printed invoices" },
      { label: "b", text: "One Supplier table containing all invoices, payments, departments, and accounts" },
      { label: "c", text: "Separate invoice files with no relationship to suppliers or accounts" },
      { label: "d", text: "One Invoice Fact table linked to Supplier, Date, Account, Department, and Payment Status dimensions" },
    ],
    answer: "d",
  },
  {
    id: 38,
    question: "What does ETL stand for?",
    choices: [
      { label: "a", text: "Evaluate, Test, Link" },
      { label: "b", text: "Export, Transfer, Log" },
      { label: "c", text: "Extract, Transform, Load" },
      { label: "d", text: "Enter, Track, List" },
    ],
    answer: "c",
  },
  {
    id: 39,
    question:
      "Which ETL stage collects data from source systems such as the general ledger, payroll, and accounts payable?",
    choices: [
      { label: "a", text: "Load" },
      { label: "b", text: "Report" },
      { label: "c", text: "Extract" },
      { label: "d", text: "Transform" },
    ],
    answer: "c",
  },
  {
    id: 40,
    question: "What is data quality?",
    choices: [
      { label: "a", text: "The number of computers used by accountants" },
      { label: "b", text: "The accuracy, completeness, consistency, and reliability of data" },
      { label: "c", text: "The speed of the company internet connection" },
      { label: "d", text: "The colour and design of a financial dashboard" },
    ],
    answer: "b",
  },
  {
    id: 41,
    question: "What is a full load?",
    choices: [
      { label: "a", text: "Loading only newly created records" },
      { label: "b", text: "Loading data without validation" },
      { label: "c", text: "Deleting all warehouse data" },
      { label: "d", text: "Loading all available records into the warehouse" },
    ],
    answer: "d",
  },
  {
    id: 42,
    question: "What is an incremental load?",
    choices: [
      { label: "a", text: "Removing duplicate records from source systems" },
      { label: "b", text: "Loading all historical records every day" },
      { label: "c", text: "Transferring data manually from paper documents" },
      { label: "d", text: "Loading only new or changed records since the previous load" },
    ],
    answer: "d",
  },
  {
    id: 43,
    question:
      'A company receives supplier codes in different formats, such as "V-001", "V001", and "001". Which ETL activity should standardize these codes?',
    choices: [
      { label: "a", text: "Extraction" },
      { label: "b", text: "Transformation" },
      { label: "c", text: "Reporting" },
      { label: "d", text: "Loading" },
    ],
    answer: "b",
  },
  {
    id: 44,
    question:
      "Before loading invoice records, the ETL process finds two records with the same invoice number, supplier, and invoice date. What should the system do?",
    choices: [
      { label: "a", text: "Delete all invoices from the supplier" },
      { label: "b", text: "Flag the records as possible duplicates for review" },
      { label: "c", text: "Change the invoice amount automatically" },
      { label: "d", text: "Load both records without checking" },
    ],
    answer: "b",
  },
  {
    id: 45,
    question: "An invoice record has a blank invoice date. Which action best supports data quality?",
    choices: [
      { label: "a", text: "Delete all invoices for the accounting period" },
      { label: "b", text: "Replace the date with any random date" },
      { label: "c", text: "Load the record without the date" },
      { label: "d", text: "Flag or reject the record until the missing date is corrected" },
    ],
    answer: "d",
  },
  {
    id: 46,
    question:
      'A source stores expense amounts as text, such as "P25,000". What transformation should be performed before loading the data?',
    choices: [
      { label: "a", text: "Change the amount into a supplier name" },
      { label: "b", text: "Copy the values into every dimension table" },
      { label: "c", text: "Remove the currency value from the report only" },
      { label: "d", text: "Convert the amount to a numeric value" },
    ],
    answer: "d",
  },
  {
    id: 47,
    question:
      "A company wants to identify invoice amounts that are unusually high compared with normal purchases from the same supplier. Which data-quality activity is most appropriate?",
    choices: [
      { label: "a", text: "Outlier or reasonableness check" },
      { label: "b", text: "Load only small transactions" },
      { label: "c", text: "Delete all invoice amounts" },
      { label: "d", text: "Remove supplier information" },
    ],
    answer: "a",
  },
  {
    id: 48,
    question:
      "During loading, the total accounts-payable amount in the warehouse does not match the total from the source system. What should be done first?",
    choices: [
      { label: "a", text: "Change the warehouse total to match the source manually" },
      { label: "b", text: "Reconcile record counts and total amounts between the source and warehouse" },
      { label: "c", text: "Ignore the difference if the reports look correct" },
      { label: "d", text: "Delete the source-system records" },
    ],
    answer: "b",
  },
  {
    id: 49,
    question:
      "A business needs its warehouse updated each night with only new journal entries and changes to existing entries. Which loading technique is most appropriate?",
    choices: [
      { label: "a", text: "Full load" },
      { label: "b", text: "Incremental load" },
      { label: "c", text: "Manual load" },
      { label: "d", text: "Paper-based load" },
    ],
    answer: "b",
  },
  {
    id: 50,
    question:
      "Which field is most useful for identifying records that changed since the last ETL load?",
    choices: [
      { label: "a", text: "Employee favourite colour" },
      { label: "b", text: "Report title" },
      { label: "c", text: "Company logo" },
      { label: "d", text: "Last Modified Date or Timestamp" },
    ],
    answer: "d",
  },
  {
    id: 51,
    question:
      "A company wants reliable daily accounting reports while minimizing loading time. Which ETL strategy is the best choice?",
    choices: [
      { label: "a", text: "Perform a full load every hour without validation" },
      { label: "b", text: "Load data only once per year" },
      { label: "c", text: "Perform a validated incremental load each day and maintain an audit log" },
      { label: "d", text: "Allow users to update warehouse records directly" },
    ],
    answer: "c",
  },
  {
    id: 52,
    question:
      "Which proposed data-quality control is the most effective for accounts-payable data?",
    choices: [
      { label: "a", text: "Remove all records with amounts above P10,000" },
      { label: "b", text: "Load every record regardless of errors" },
      { label: "c", text: "Check for missing required fields, duplicate invoices, valid supplier codes, and reconcile totals" },
      { label: "d", text: "Check only whether the dashboard has loaded" },
    ],
    answer: "c",
  },
  {
    id: 53,
    question:
      "Which ETL design best supports accurate, traceable accounting data in a warehouse?",
    choices: [
      { label: "a", text: "Extract data – load directly into reports without validation" },
      { label: "b", text: "Load data first – delete errors without recording them" },
      { label: "c", text: "Print source documents – manually retype them into dashboards" },
      { label: "d", text: "Extract data – validate and cleanse in staging – transform – load – reconcile and record exceptions" },
    ],
    answer: "d",
  },
  {
    id: 54,
    question: "What is data warehouse implementation?",
    choices: [
      { label: "a", text: "The process of planning, building, testing, and deploying a data warehouse" },
      { label: "b", text: "The preparation of printed financial reports only" },
      { label: "c", text: "The replacement of all business systems" },
      { label: "d", text: "The process of deleting accounting records" },
    ],
    answer: "a",
  },
  {
    id: 55,
    question: "What is the main goal of data warehouse optimization?",
    choices: [
      { label: "a", text: "To prevent users from accessing reports" },
      { label: "b", text: "To remove all historical data" },
      { label: "c", text: "To replace accounting policies" },
      { label: "d", text: "To improve query performance and efficient use of resources" },
    ],
    answer: "d",
  },
  {
    id: 56,
    question: "What is a data warehousing platform?",
    choices: [
      { label: "a", text: "A paper form used for accounting entries" },
      { label: "b", text: "A list of employee responsibilities" },
      { label: "c", text: "The software and infrastructure used to store, process, and analyze warehouse data" },
      { label: "d", text: "A type of financial statement" },
    ],
    answer: "c",
  },
  {
    id: 57,
    question: "What is data partitioning?",
    choices: [
      { label: "a", text: "Restricting all users from viewing reports" },
      { label: "b", text: "Copying the same data into every table" },
      { label: "c", text: "Dividing large data tables into smaller sections based on a rule, such as date" },
      { label: "d", text: "Deleting old records from the warehouse" },
    ],
    answer: "c",
  },
  {
    id: 58,
    question:
      "A company's expense-report query is slow because it searches ten years of transactions. Which optimization technique is most appropriate?",
    choices: [
      { label: "a", text: "Disable financial reports" },
      { label: "b", text: "Partition the fact table by accounting year or month" },
      { label: "c", text: "Store the data only in spreadsheets" },
      { label: "d", text: "Remove all expense transactions" },
    ],
    answer: "b",
  },
  {
    id: 59,
    question:
      "Management frequently requests total expenses by department and month. What can improve the speed of this report?",
    choices: [
      { label: "a", text: "Create summary or aggregate tables for department and monthly expenses" },
      { label: "b", text: "Delete department information" },
      { label: "c", text: "Require manual calculation for every report" },
      { label: "d", text: "Load data without transformation" },
    ],
    answer: "a",
  },
  {
    id: 60,
    question:
      "Before implementing a warehouse, a company interviews accountants, auditors, and managers to identify needed reports and metrics. What implementation activity is being performed?",
    choices: [
      { label: "a", text: "Data deletion" },
      { label: "b", text: "Requirements gathering" },
      { label: "c", text: "Platform shutdown" },
      { label: "d", text: "Query execution" },
    ],
    answer: "b",
  },
  {
    id: 61,
    question:
      "A warehouse load fails because a source system added a new account-code format that was not included in the ETL rules. What should the team do?",
    choices: [
      { label: "a", text: "Update the data mapping and transformation rules, then test the load" },
      { label: "b", text: "Delete the source-system data" },
      { label: "c", text: "Ignore the new account codes" },
      { label: "d", text: "Allow incorrect codes to enter the warehouse" },
    ],
    answer: "a",
  },
  {
    id: 62,
    question:
      "A company expects its transaction volume to grow rapidly and wants to avoid purchasing and maintaining its own servers. Which platform option best fits this requirement?",
    choices: [
      { label: "a", text: "A single offline spreadsheet" },
      { label: "b", text: "A paper-based accounting system" },
      { label: "c", text: "A scalable cloud-based data warehouse platform" },
      { label: "d", text: "A manual filing cabinet" },
    ],
    answer: "c",
  },
  {
    id: 63,
    question:
      "A finance manager notices that a warehouse report does not match the general ledger after implementation. Which action is most appropriate?",
    choices: [
      { label: "a", text: "Change the report total manually" },
      { label: "b", text: "Ignore the discrepancy" },
      { label: "c", text: "Delete the general-ledger data" },
      { label: "d", text: "Reconcile source totals and warehouse totals, then investigate the difference" },
    ],
    answer: "d",
  },
  {
    id: 64,
    question:
      "A company handles confidential payroll and financial data but has a small IT team. Which platform proposal is the best choice?",
    choices: [
      { label: "a", text: "A managed cloud platform with encryption, role-based access, backups, and audit logs" },
      { label: "b", text: "A platform with no user authentication" },
      { label: "c", text: "A personal computer without backups" },
      { label: "d", text: "A public spreadsheet shared with all employees" },
    ],
    answer: "a",
  },
  {
    id: 65,
    question:
      "Which optimization plan is most effective for a warehouse used for large accounting reports?",
    choices: [
      { label: "a", text: "Use indexes, keys, date-based partitions, aggregate tables, and regular performance monitoring" },
      { label: "b", text: "Store all records in one unindexed table" },
      { label: "c", text: "Delete data whenever a report becomes slow" },
      { label: "d", text: "Require users to calculate results manually" },
    ],
    answer: "a",
  },
  {
    id: 66,
    question: "Which implementation plan best supports a reliable accounting data warehouse?",
    choices: [
      { label: "a", text: "Gather requirements – design the model – build ETL – test and reconcile data – deploy – monitor and optimize" },
      { label: "b", text: "Load data directly into dashboards – remove errors afterward" },
      { label: "c", text: "Build the platform – avoid user training and maintenance" },
      { label: "d", text: "Deploy reports first – collect requirements later – skip testing" },
    ],
    answer: "a",
  },
];
