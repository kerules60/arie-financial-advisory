package com.arie.financial.advisory.config;

import com.arie.financial.advisory.mybatis.mappers.LoansMapper;
import com.arie.financial.advisory.service.LoansMapperService;
import org.mybatis.spring.mapper.MapperFactoryBean;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(value = DataSourceProperties.class)
public class MyBatisConfig {

    @Bean
    public MapperFactoryBean<LoansMapper> userMapper() throws Exception {
        MapperFactoryBean<LoansMapper> factoryBean = new MapperFactoryBean<>(LoansMapper.class);
        factoryBean.setSqlSessionFactory(factoryBean.getSqlSessionFactory());
        return factoryBean;
    }

}
