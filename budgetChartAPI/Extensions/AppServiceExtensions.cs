using System;
using budgetChartAPI.Data;
using budgetChartAPI.Interfaces;
using budgetChartAPI.Services;
using Microsoft.EntityFrameworkCore;

namespace budgetChartAPI.Extensions;

public static class AppServiceExtensions
{
    public static IServiceCollection AddAppServices(this IServiceCollection services, IConfiguration config)
    {
            services.AddControllers();
            services.AddDbContext<DataContext>(opt =>
        {
            opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
        });
            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();

        return services;
    }
}
