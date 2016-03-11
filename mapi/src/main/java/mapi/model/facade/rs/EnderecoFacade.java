package mapi.model.facade.rs;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import mapi.model.domain.Endereco;
import mapi.model.service.EnderecoService;

@Path("/endereco")
@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
@Consumes(MediaType.APPLICATION_JSON)
@Singleton
public class EnderecoFacade {

	@Inject
	private EnderecoService enderecoService;

	@GET
	@Path("/{codigo}")
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public Endereco getEnderecoPorCodigo(@PathParam("codigo") String codigo) {
		return this.enderecoService.getEnderecoPorCodigo(codigo);
	}

	@GET
	public Endereco getEnderecos(Endereco id) {
		return this.enderecoService.getEndereco(id);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public List<Endereco> getEnderecos() {
		return this.enderecoService.getEnderecos();
	}

	@POST
	public Endereco salvar(Endereco endereco) {
		return this.enderecoService.salvar(endereco);
	}

	@PUT
	public void atualizar(Endereco endereco) {
		this.enderecoService.atualizar(endereco);
	}

	@DELETE
	@Path("/{id}")
	public void excluir(@PathParam("id") int id) {
		Endereco endereco = new Endereco();
		endereco.setId(id);
		this.enderecoService.excluir(endereco);
	}

}
