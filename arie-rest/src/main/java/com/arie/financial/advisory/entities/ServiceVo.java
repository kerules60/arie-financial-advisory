package com.arie.financial.advisory.entities;

import javax.persistence.*;

@Entity
@Table(name="SERVICES_INFO")
public class ServiceVo {

    @Id
    @GeneratedValue
    @Column(name="SERVICE_ID")
    private Integer serviceId;
    @Column(name="SERVICE_NAME")
    private String serviceName;
    @Column(name="SERVICE_DESCRIPTION")
    private String serviceDescription;

    public Integer getServiceId() {
        return serviceId;
    }

    public void setServiceId(Integer serviceId) {
        this.serviceId = serviceId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getServiceDescription() {
        return serviceDescription;
    }

    public void setServiceDescription(String serviceDescription) {
        this.serviceDescription = serviceDescription;
    }

    @Override
    public String toString() {
        return "ServiceVo{" +
                "serviceId=" + serviceId +
                ", serviceName='" + serviceName + '\'' +
                ", serviceDescription='" + serviceDescription + '\'' +
                '}';
    }
}
