using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using backend;
using Newtonsoft.Json.Serialization;
using System.Text.Json.Serialization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using backend.Repositories;
using backend.Controllers;


public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }
    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        //Enable CORS
        services.AddCors(c =>
        {
            c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
        });

            /*services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins("http://localhost:3000")
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            });*/

        //JSON Serializer
        services.AddControllersWithViews().AddNewtonsoftJson(options =>
        {
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            options.SerializerSettings.ContractResolver = new DefaultContractResolver();
        });

        services.AddControllers();
        services.AddScoped<UserController>();
        services.AddScoped<IUserRepository, UserRepository>();

    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseCors(options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseCors();

        app.UseHttpsRedirection();

        app.UseRouting();

        app.UseAuthorization();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        var userRepository = app.ApplicationServices.GetService<IUserRepository>();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}
