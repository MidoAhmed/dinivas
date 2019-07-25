export interface ICloudApiConfig {
  auth_url: string;
  username: string;
  password: string;
  project_id: string;
  region_name?: string;
}

export interface ICloudApiInfo {
  user_name: string;
  project_name: string;
}

// Project

export interface ICloudApiProjectQuotaDetail {
  in_use: number;
  limit: number;
  reserved: number;
}

export interface ICloudApiProjectQuota {
  id: string;
  instances: ICloudApiProjectQuotaDetail;
  cores: ICloudApiProjectQuotaDetail;
  ram: ICloudApiProjectQuotaDetail;
  floating_ips: ICloudApiProjectQuotaDetail;
}

// Instance

export interface ICloudApiInstanceAdress {
  addr: string;
  type: string;
  version: string;
}

export interface ICloudApiInstance {
  id: string;
  name: string;
  status: string;
  adresses: ICloudApiInstanceAdress[];
  keys: string[];
  created_date: string;
  updated_date: string;
}

export interface ICloudApiImage {
  id: string;
  name: string;
  container_format: string;
  owner: string;
  size: number;
  status: string;
  min_disk: number;
  visibility: string;
  date: string;
  tags: string[];
}

// Disks

export interface ICloudApiDisk {
  id: string;
  name: string;
  size: number;
  status: string;
  volumeType: string;
  date: string;
  metedata: {};
}

export interface ICloudApi {
  getProjectInfo(cloudConfig: ICloudApiConfig): Promise<ICloudApiInfo>;
  getProjectQuota(cloudConfig: ICloudApiConfig): Promise<ICloudApiProjectQuota>;
  getAllinstances(cloudConfig: ICloudApiConfig): Promise<ICloudApiInstance[]>;
  getAllImages(loudConfig: ICloudApiConfig): Promise<ICloudApiImage[]>;
  getAllDisks(loudConfig: ICloudApiConfig): Promise<ICloudApiDisk[]>;
}
