export interface Guide {
  id: string
  title: string
  description: string
  tag: string
  icon: string
  content: string
  fileName: string
}

export const guides: Guide[] = [
  {
    id: 'small-business-starter-guide',
    title: "Small Business Starter Guide",
    description: "Learn how to start, manage, and grow your business efficiently.",
    tag: "Beginner",
    icon: "rocket",
    fileName: "small-business-starter-guide.md",
    content: `# Small Business Starter Guide

## Introduction

Starting a small business is an exciting journey. This guide will help you navigate the essential steps to launch and grow your business successfully.

---

## Chapter 1: Planning Your Business

### Define Your Vision
Every successful business starts with a clear vision. Ask yourself:
- What problem am I solving?
- Who is my target audience?
- What makes my business unique?

### Create a Business Plan
A solid business plan includes:
1. Executive Summary
2. Company Description
3. Market Analysis
4. Organization Structure
5. Product Line
6. Marketing Strategy
7. Financial Projections

---

## Chapter 2: Legal Structure

Choose the right legal structure for your business:

| Structure | Best For | Liability | Complexity |
|-----------|----------|-----------|------------|
| Sole Proprietorship | Freelancers, solo businesses | Personal | Low |
| LLC | Growing businesses | Limited | Medium |
| Corporation | Large businesses, investors | Limited | High |

### Key Steps to Register:
1. Choose a business name
2. Register with your state
3. Get an EIN from the IRS
4. Obtain necessary licenses
5. Open a business bank account

---

## Chapter 3: Financial Management

### Essential Financial Practices
- Separate business and personal accounts
- Track every expense
- Invoice promptly
- Monitor cash flow weekly
- Plan for taxes

### Budgeting Template

| Category | Monthly Budget | Actual | Variance |
|----------|---------------|--------|----------|
| Rent/Office | $_______ | $_______ | $_______ |
| Salaries | $_______ | $_______ | $_______ |
| Marketing | $_______ | $_______ | $_______ |
| Inventory | $_______ | $_______ | $_______ |
| Software | $_______ | $_______ | $_______ |
| Utilities | $_______ | $_______ | $_______ |
| Miscellaneous | $_______ | $_______ | $_______ |

---

## Chapter 4: Marketing Your Business

### Digital Marketing Essentials
- **Website**: Your digital storefront
- **Social Media**: Connect with customers
- **Email Marketing**: Build relationships
- **SEO**: Get found online

### Customer Acquisition Checklist
- [ ] Define target audience
- [ ] Create buyer personas
- [ ] Set up Google My Business
- [ ] Start social media profiles
- [ ] Build email list
- [ ] Create content calendar
- [ ] Launch referral program

---

## Chapter 5: Operations & Growth

### Daily Operations Checklist
- [ ] Check inventory levels
- [ ] Process orders
- [ ] Respond to customers
- [ ] Review finances
- [ ] Plan next day

### Growth Metrics to Track
1. Monthly Recurring Revenue (MRR)
2. Customer Acquisition Cost (CAC)
3. Customer Lifetime Value (LTV)
4. Churn Rate
5. Net Promoter Score (NPS)

---

## Conclusion

Starting a business takes courage and dedication. Use this guide as your roadmap, and remember that every successful entrepreneur started exactly where you are today.

**Next Steps:**
1. Complete your business plan
2. Register your business
3. Set up financial systems
4. Launch your marketing
5. Start selling!

---
📧 Questions? Email us at support@trezbo.com
🌐 Visit us at trezbo.com
`
  },
  {
    id: 'vendor-management-simplified',
    title: "Vendor Management Simplified",
    description: "Best practices to manage suppliers, track orders, and reduce delays.",
    tag: "Operations",
    icon: "users",
    fileName: "vendor-management-simplified.md",
    content: `# Vendor Management Simplified

## Introduction

Effective vendor management is crucial for business success. This guide provides practical strategies to build strong supplier relationships and streamline your supply chain.

---

## Chapter 1: Finding the Right Vendors

### Vendor Selection Criteria
- **Quality standards** - Meet your specifications
- **Pricing structure** - Competitive and transparent
- **Delivery capabilities** - On-time, complete orders
- **Payment terms** - Net 30, Net 60 options
- **Communication** - Responsive and clear
- **Financial stability** - Reliable long-term partner

### Due Diligence Checklist
- [ ] Verify business licenses
- [ ] Check references (at least 3)
- [ ] Request product samples
- [ ] Review contracts carefully
- [ ] Assess their capacity
- [ ] Visit facilities if possible

---

## Chapter 2: Negotiation Strategies

### Preparation Steps
1. Research market rates
2. Define your must-haves
3. Calculate your ideal price
4. Identify alternative vendors
5. Set negotiation boundaries

### Key Negotiation Tactics

| Tactic | Strategy | Expected Outcome |
|--------|----------|------------------|
| Volume Discounts | Commit to larger quantities | 5-15% savings |
| Long-term Contracts | Sign multi-year agreements | 10-20% savings |
| Early Payment | Pay within 10 days | 2-5% discount |
| Bundling | Combine multiple products | 10-15% savings |

---

## Chapter 3: Tracking Orders & Inventory

### Order Management Best Practices
- Use purchase order systems
- Set reorder points
- Track lead times
- Monitor delivery performance
- Maintain safety stock

### Reorder Point Formula
\`\`\`
Reorder Point = (Average Daily Usage × Lead Time) + Safety Stock
\`\`\`

### Reducing Delays
1. Communicate clearly from the start
2. Set realistic delivery timelines
3. Build 20% buffer time
4. Have 2-3 backup vendors
5. Use tracking software

---

## Chapter 4: Building Strong Relationships

### Vendor Relationship Management

**Weekly:**
- Check order status
- Share upcoming needs

**Monthly:**
- Review performance metrics
- Discuss challenges

**Quarterly:**
- Business review meeting
- Plan upcoming quarters

**Annually:**
- Contract renewal review
- Strategic planning

### Handling Issues Professionally
1. Document everything with dates
2. Address problems immediately
3. Be solution-oriented, not blame-focused
4. Escalate appropriately through channels
5. Review and update contracts if needed

---

## Chapter 5: Performance Metrics

### Key Vendor KPIs

| Metric | Target | Calculation |
|--------|--------|-------------|
| On-time Delivery | 98%+ | Orders on time ÷ Total orders |
| Quality Acceptance | 99%+ | Accepted units ÷ Total units |
| Response Time | <4 hours | Time to respond to queries |
| Pricing Competitiveness | Market rate | Compare with alternatives |
| Issue Resolution | <48 hours | Time to resolve problems |

### Vendor Scorecard Template

| Vendor | On-time | Quality | Price | Comm. | Total |
|--------|---------|---------|-------|-------|-------|
| Vendor A | 95% | 98% | 8/10 | 9/10 | 92% |
| Vendor B | 98% | 99% | 7/10 | 8/10 | 91% |
| Vendor C | 92% | 95% | 9/10 | 7/10 | 87% |

---

## Chapter 6: Risk Management

### Identify Risks
- Single source dependency
- Financial instability
- Geographic/political risks
- Quality fluctuations
- Capacity constraints

### Mitigation Strategies
1. Diversify vendor base
2. Maintain safety stock
3. Regular financial reviews
4. Quality audits
5. Multi-region sourcing

---

## Conclusion

Effective vendor management saves time, money, and stress. Implement these practices to build a reliable supply chain that supports your business growth.

**Quick Wins:**
- Create vendor scorecard this week
- Schedule quarterly reviews with top 5 vendors
- Automate reorder points for top 20 SKUs

---
📧 Questions? Email us at support@trezbo.com
🌐 Visit us at trezbo.com
`
  },
  {
    id: 'hr-management-small-teams',
    title: "HR Management for Small Teams",
    description: "Handle hiring, onboarding, and employee tracking without complexity.",
    tag: "HR",
    icon: "users",
    fileName: "hr-management-small-teams.md",
    content: `# HR Management for Small Teams

## Introduction

Small teams need HR systems that are simple yet effective. This guide helps you manage people operations without the complexity of enterprise HR.

---

## Chapter 1: Hiring Right

### Creating Job Descriptions

**Essential Components:**
- Clear role title
- Core responsibilities (5-7 bullet points)
- Required qualifications
- Nice-to-have skills
- Growth opportunities
- Company culture description
- Compensation range

### Interview Process

| Stage | Activity | Timeline |
|-------|----------|----------|
| 1 | Phone screening (15-20 min) | Day 1-3 |
| 2 | Skills assessment | Day 3-5 |
| 3 | Team interview (45-60 min) | Day 5-7 |
| 4 | Reference checks | Day 7-10 |
| 5 | Offer negotiation | Day 10-14 |

---

## Chapter 2: Smooth Onboarding

### 30-60-90 Day Onboarding Plan

**First 30 Days (Learning):**
- [ ] Complete all paperwork
- [ ] Set up accounts and equipment
- [ ] Meet the entire team
- [ ] Understand company processes
- [ ] Complete initial training modules
- [ ] Set 30-day goals

**Days 31-60 (Contributing):**
- [ ] Take on full responsibilities
- [ ] Build working relationships
- [ ] Seek and incorporate feedback
- [ ] Set performance goals for next 30 days
- [ ] Identify process improvements

**Days 61-90 (Leading):**
- [ ] Lead small projects
- [ ] Mentor new team members
- [ ] Provide input on improvements
- [ ] Fully integrated into team
- [ ] Set 90-day performance review

### Onboarding Checklist Template

\`\`\`
[ ] Offer letter signed and returned
[ ] Background check completed
[ ] Tax forms (W-4, state) submitted
[ ] I-9 form completed
[ ] Employee handbook acknowledged
[ ] Equipment provided (laptop, phone)
[ ] Email and software accounts created
[ ] Training schedule established
[ ] Welcome kit sent
[ ] First week schedule shared
\`\`\`

---

## Chapter 3: Employee Tracking

### Essential HR Records

**Personal Information**
- Full name and contact details
- Emergency contacts
- Date of birth
- Government ID numbers

**Employment Records**
- Job title and department
- Start date
- Salary and compensation
- Employment agreement
- Promotion history

**Performance Records**
- Job descriptions
- Performance reviews
- Goal tracking
- Recognition received
- Disciplinary records

### Time & Attendance

**Tracking Methods:**
- Time clock software
- Timesheet submission
- Project time tracking
- Remote work check-ins

**Time-off Categories:**
- Vacation/PTO
- Sick leave
- Personal days
- Bereavement
- Jury duty
- Parental leave

---

## Chapter 4: Performance Management

### Regular Check-in Schedule

| Frequency | Duration | Focus |
|-----------|----------|-------|
| Weekly | 15 min | Priorities, blockers |
| Monthly | 30 min | Progress, feedback |
| Quarterly | 60 min | Goals, development |
| Annually | 90 min | Review, planning |

### Feedback Framework (SBI Model)

**Situation** - When and where it happened
**Behavior** - What specifically happened
**Impact** - What was the effect

**Example:**
> "In yesterday's team meeting (Situation), when you interrupted the client three times (Behavior), it prevented them from fully explaining their requirements (Impact)."

---

## Chapter 5: Legal Compliance

### Essential Compliance Areas

| Area | Key Requirements |
|------|------------------|
| Wage & Hour | Minimum wage, overtime, breaks |
| Anti-discrimination | Equal opportunity, accommodations |
| Workplace Safety | OSHA standards, training |
| Leave | FMLA, sick leave, parental leave |
| Records Retention | I-9, payroll, personnel files |

### Documentation Requirements

**Retention Schedule:**
- I-9 forms: 3 years after hire or 1 year after termination
- Payroll records: 3 years
- Personnel files: 3 years after termination
- Medical records: 6 years
- Employment posters: Current versions

---

## Chapter 6: Employee Development

### Growth Opportunities

**Internal:**
- Cross-training in other roles
- Mentorship programs
- Stretch assignments
- Leadership tracks
- Job shadowing

**External:**
- Conference attendance
- Online courses
- Certification programs
- Industry workshops
- Professional memberships

### Recognition Ideas

| Type | Examples | Budget |
|------|----------|--------|
| Public | Shout-out in meeting, email | $0 |
| Peer-to-peer | Thank you notes, recognition platform | $0-50 |
| Manager-led | Lunch with leader, flexible hours | $0-100 |
| Company-wide | Employee of month, awards | $50-500 |
| Financial | Bonuses, gift cards | $100-5000 |

---

## Chapter 7: Offboarding

### Exit Checklist
- [ ] Exit interview scheduled
- [ ] Final paycheck prepared
- [ ] Benefits information shared
- [ ] Equipment return arranged
- [ ] Accounts deactivated
- [ ] Access revoked
- [ ] COBRA information provided

---

## Conclusion

Small teams can have effective HR without dedicated HR staff. Use these practices to build a positive workplace where employees thrive.

**HR Checklist for Next Week:**
- [ ] Schedule team 1:1s
- [ ] Update employee handbook
- [ ] Review open positions
- [ ] Plan team building activity

---
📧 Questions? Email us at support@trezbo.com
🌐 Visit us at trezbo.com
`
  },
  {
    id: 'boost-productivity-smart-tools',
    title: "Boost Productivity with Smart Tools",
    description: "Discover how automation and dashboards improve daily operations.",
    tag: "Productivity",
    icon: "trending-up",
    fileName: "boost-productivity-smart-tools.md",
    content: `# Boost Productivity with Smart Tools

## Introduction

The right tools can transform your business operations. This guide explores automation and dashboards that help small teams accomplish more in less time.

---

## Chapter 1: Automation Basics

### What to Automate First

**Top 10 Tasks to Automate:**
1. Email follow-ups and sequences
2. Data entry between systems
3. Invoice generation and sending
4. Inventory reorder alerts
5. Social media scheduling
6. Customer support ticket routing
7. Meeting scheduling
8. Report generation
9. New lead notifications
10. Payment reminders

### The 80/20 Rule for Automation
Focus on automating tasks that:
- Are repetitive (happen daily/weekly)
- Take >15 minutes each
- Have clear rules/triggers
- Don't require human judgment

---

## Chapter 2: Dashboard Essentials

### Key Metrics Dashboard

**Executive Dashboard:**
| Metric | Why Track |
|--------|-----------|
| Revenue (daily/weekly/monthly) | Business health |
| Customer acquisition cost | Marketing efficiency |
| Customer lifetime value | Profitability |
| Churn rate | Retention |
| Cash flow | Financial health |

**Operations Dashboard:**
- Inventory turnover
- Order fulfillment time
- Vendor delivery performance
- Quality metrics
- Production efficiency

### Dashboard Design Principles

1. **Show only what matters** - Maximum 7-10 metrics
2. **Update in real-time** or daily
3. **Make it visual** - Charts > tables
4. **Allow drill-down** for details
5. **Set benchmarks** to compare performance

---

## Chapter 3: Workflow Automation

### Common Workflows to Automate

**Sales Automation:**
\`\`\`
Lead captured → Add to CRM → Send welcome email → Assign to sales rep → Schedule follow-up
\`\`\`

**Order Processing:**
\`\`\`
Order received → Update inventory → Generate invoice → Send confirmation → Notify shipping
\`\`\`

**Customer Support:**
\`\`\`
Ticket created → Categorize → Route to specialist → Send acknowledgment → Escalate if unresolved
\`\`\`

### Automation Rules Examples

| Trigger | Action | Platform |
|---------|--------|----------|
| New customer signup | Send welcome sequence | Email marketing |
| Inventory < threshold | Create purchase order | Inventory system |
| Payment received | Update CRM status | Accounting software |
| Task completed | Notify team | Project management |

---

## Chapter 4: Communication Tools

### Team Communication Stack

| Need | Tool Examples | Cost |
|------|---------------|------|
| Instant messaging | Slack, Teams, Discord | Free-$15/user |
| Video meetings | Zoom, Google Meet, Teams | Free-$20/user |
| Project comments | Asana, Trello, ClickUp | Free-$20/user |
| File sharing | Google Drive, Dropbox | Free-$15/user |
| Announcements | Email, Slack channels | Included |

### Customer Communication Tools

**Live Chat:** Intercom, Drift, Tidio
**Email:** Mailchimp, ConvertKit, Brevo
**SMS:** Twilio, TextMagic
**Social:** Hootsuite, Buffer
**Reviews:** Trustpilot, G2

---

## Chapter 5: Time Management

### Time Tracking Tools

| Tool | Best For | Key Feature |
|------|----------|-------------|
| Toggl | Freelancers | One-click timer |
| Harvest | Agencies | Invoicing integration |
| Clockify | Teams | Unlimited users free |
| RescueTime | Personal | Automatic tracking |
| Timing | Mac users | App-level tracking |

### Productivity Techniques

**Pomodoro Method:**
- 25 minutes focused work
- 5 minute break
- Repeat 4 times
- Take 15-30 minute break

**Time Blocking:**
- Morning: Deep work (3 hours)
- Late morning: Meetings (2 hours)
- Afternoon: Administrative (2 hours)
- Late afternoon: Planning (1 hour)

---

## Chapter 6: Reporting & Analytics

### Essential Reports

**Daily Reports:**
- Sales summary
- Support tickets
- Production output
- Cash position

**Weekly Reports:**
- Team productivity
- Project status
- Lead generation
- Customer feedback

**Monthly Reports:**
- Financial statements
- Marketing ROI
- Employee performance
- Customer metrics

**Quarterly Reports:**
- Strategic initiatives
- Goal progress
- Market trends
- Competitive analysis

---

## Chapter 7: Integration Strategy

### Integration Principles

1. **Single source of truth** - Centralize data
2. **API-first tools** - Easy to connect
3. **Two-way sync** where needed
4. **Test before deploying** - Use sandbox
5. **Monitor regularly** - Check for failures

### Common Integration Patterns

| Systems | Integration Method |
|---------|-------------------|
| CRM + Email | Native integration |
| E-commerce + Inventory | API sync |
| Accounting + Payment | Webhook |
| Project + Time tracking | Plugin/Extension |
| Help desk + Knowledge base | Zapier/Make |

---

## Chapter 8: Tool Selection Framework

### Evaluation Criteria

| Criteria | Weight | Score (1-5) |
|----------|--------|--------------|
| Features needed | 25% | __ |
| Ease of use | 20% | __ |
| Price | 20% | __ |
| Integrations | 15% | __ |
| Support | 10% | __ |
| Security | 10% | __ |

### Free vs Paid Decision

**Start Free When:**
- Testing a new category
- Team size under 5
- Basic features sufficient
- Budget is tight

**Upgrade to Paid When:**
- Outgrowing free limits
- Need advanced features
- Require support/SLA
- Handling sensitive data

---

## Conclusion

Smart tools and automation are investments in your business efficiency. Start with one area, measure results, and expand gradually.

**30-Day Productivity Plan:**
- Week 1: Audit current tools and processes
- Week 2: Set up 3 automations
- Week 3: Create 1 dashboard
- Week 4: Review and optimize

---
📧 Questions? Email us at support@trezbo.com
🌐 Visit us at trezbo.com
`
  }
]
