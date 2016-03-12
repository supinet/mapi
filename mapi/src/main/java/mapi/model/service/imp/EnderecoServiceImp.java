package mapi.model.service.imp;

import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import mapi.model.dao.EnderecoDao;
import mapi.model.domain.Endereco;
import mapi.model.service.EnderecoService;

public class EnderecoServiceImp implements EnderecoService {
	
	@Inject
	private EnderecoDao enderecoDao;

	@Override
	public List<Endereco> getEnderecos() {
		return this.enderecoDao.getEnderecos();
	}

	@Override
	@Transactional
	public Endereco salvar(Endereco endereco) {
		return this.enderecoDao.salvar(endereco);
	}

	@Override
	@Transactional
	public void atualizar(Endereco endereco) {
		this.enderecoDao.atualizar(endereco);

	}

	@Override
	@Transactional
	public void excluir(Endereco endereco) {
		this.enderecoDao.excluir(endereco);
	}

	@Override
	public Endereco getEnderecoPorCodigo(String cep) {
		return this.enderecoDao.getEnderecoPorCodigo(cep);
	}

	@Override
	public Endereco getEndereco(Endereco id) {
		return this.enderecoDao.getEndereco(id);
	}

}
