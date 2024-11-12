using System;
using budgetChartAPI.Entities;

namespace budgetChartAPI.Interfaces;

public interface ITokenService
{
    string CreateToken(AppUser user);
}
