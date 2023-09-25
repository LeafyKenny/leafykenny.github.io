from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle
import pandas as pd

# Sample data for taxable, non-taxable, and deductions tables
taxable_data = {
    'Description': ['Basic Salary', 'Overtime', 'Bonus'],
    'Amount': [5000, 500, 1000]
}

nontaxable_data = {
    'Description': ['Meal Allowance', 'Transport Allowance'],
    'Amount': [200, 150]
}

deductions_data = {
    'Description': ['Tax', 'Health Insurance', 'Pension'],
    'Amount': [800, 100, 200]
}

# Function to create a table from the data
def create_table(data):
    table_data = [list(data.columns)] + [list(row) for _, row in data.iterrows()]
    table = Table(table_data)
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
    ]))
    return table

# Create the PDF document and add content
def create_payslip_pdf(file_path):
    doc = SimpleDocTemplate(file_path, pagesize=letter)
    elements = []

    # Adding the taxable table
    taxable_df = pd.DataFrame(taxable_data)
    taxable_table = create_table(taxable_df)
    elements.append(taxable_table)

    # Adding the non-taxable table
    nontaxable_df = pd.DataFrame(nontaxable_data)
    nontaxable_table = create_table(nontaxable_df)
    elements.append(nontaxable_table)

    # Adding the deductions table
    deductions_df = pd.DataFrame(deductions_data)
    deductions_table = create_table(deductions_df)
    elements.append(deductions_table)

    # Build the PDF
    doc.build(elements)

if __name__ == "__main__":
    payslip_file_path = "payslip.pdf"
    create_payslip_pdf(payslip_file_path)
    print(f"Payslip PDF created successfully at '{payslip_file_path}'.")
