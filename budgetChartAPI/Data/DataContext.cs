using budgetChartAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace budgetChartAPI.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<AppUser> Users { get; set; } = default!;
    // public DbSet<DebtBillAccount> DebtBillAccounts { get; set; } = default!;
    // public DbSet<RecurringBillAccount> RecurringBillAccounts { get; set; } = default!;
    // public DbSet<PaySchedule> PaySchedules { get; set; } = default!;
    // public DbSet<WageInformation> WageInformations { get; set; } = default!;
    // public DbSet<PrioritySpending> PrioritySpendings { get; set; } = default!;
}